import fs, {
    writeFile
} from 'fs';
import {
    createGzip
} from 'zlib';
import {
    createHeader
} from './header';
import {
    createPortfolio
} from './portfolio';
import {
    each
} from 'async';
import Chance from 'chance';

let chance = new Chance();
const numberOfPortfolios = 300;


const createPositions = () => {

    let portfolios = generatePortfolios();
    let fullPositions = createHeader();
    fullPositions.portfolios = [];

    portfolios.forEach((portfolioId) => {
        fullPositions.portfolios.push(createPortfolio(portfolioId));
    });

    return JSON.stringify(fullPositions);
};


const generatePortfolios = () => {
    let portfolioList = [];
    for (let i = 0, portfolio = 1; i <= numberOfPortfolios; i++) {
        portfolio += chance.natural({
            min: 1,
            max: 10
        });
        portfolioList.push(portfolio);
    }

    return portfolioList;
};


const deleteFolderRecursive = (path) => {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};


const generateFiles = () => {

    deleteFolderRecursive('generated_files');
    fs.mkdir('generated_files', (err) => {
        if (err) {
            console.log(err);
        }
    });

    let portfolios = generatePortfolios();

    each(portfolios, (portfolioId, callback) => {
            let fullPositions = createHeader();
            fullPositions.portfolios = [];
            fullPositions.portfolios.push(createPortfolio(portfolioId));

            let gzip = createGzip();
            let out = fs.createWriteStream('generated_files/' + portfolioId.toString() + '.txt.gz');
            gzip.pipe(out);

            gzip.write(JSON.stringify(fullPositions));

            gzip.end();

            // writeFile("generated_files/" + portfolioId.toString() + ".txt", JSON.stringify(fullPositions), (err) => {
            //     if (err) {
            //         callback(err);
            //     }
            //     callback();
            // });
        },
        (err) => {
            console.log(err);
        });

};



generateFiles();
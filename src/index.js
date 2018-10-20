import fs, {writeFile} from 'fs';

const numberOfPortfolios = 200;

const numberOfInvestments = 300;

const numberOfLots = 10;

const createHeader = () => {
    const header = 
    {
        header: {
            field2: "abcd",
            otherField: "2015-11-22",
            otherHeader: "test"
        }
    };  
    return header;
};


const createPortfolio = () => {
    const portfolio =
    {
        asofDate: (new Date()).toISOString(),
        portfolioId: 12,
        accountingBasis: 1
    };

    return portfolio;
};

const createPositions = () => {

    let fullPositions = createHeader();

    fullPositions.portfolios = [];


    for (let x = 0; x <= numberOfPortfolios; x++ ) {
        fullPositions.portfolios.push(createPortfolio());
    }
    
    return JSON.stringify(fullPositions);
};

writeFile("genereated_files/test.txt", createPositions(), () => {console.log("file written");});



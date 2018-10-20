import Chance from 'chance';
import moment from 'moment';
import {
    createInvestment,
    resetInvestments
} from './investment';


let chance = new Chance();


export const createPortfolio = (portfolioId) => {
    const portfolio = {
        asofDate: moment().format(),
        portfolioId: portfolioId,
        accountingBasis: 1,
        investments: createInvestments()
    };

    return portfolio;
};

const createInvestments = () => {
    let investments = [];
    let numberOfInvestments = chance.natural({
        min: 150,
        max: 5000
    });

    resetInvestments();

    for (let i = 0; i < numberOfInvestments; i++) {
        investments.push(createInvestment());
    }

    return investments;

};
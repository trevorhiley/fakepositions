import Chance from 'chance';
import moment from 'moment';
import {
    createInvestments
} from './investment';


let chance = new Chance();


export const createPortfolio = (portfolioId) => {
    const portfolio = {
        asofDate: moment().startOf('day').format('YYYY-MM-DD hh:mm:ss'),
        portfolioId: portfolioId,
        accountingBasis: 1,
        investments: createInvestments()
    };

    return portfolio;
};
import Chance from 'chance';
import moment from 'moment';


let chance = new Chance();

let currentInvestment = 1;

export const createInvestment = () => {
    const investment = {
        investmentId: incrementInvestment(currentInvestment),
        positionPrice: chance.floating({
            min: 0.1,
            max: 10000,
            fixed: 8
        }),
        bookValue: chance.floating({
            min: 1000,
            max: 1000000,
            fixed: 8
        }),
        marketValue: chance.floating({
            min: 1000,
            max: 1000000,
            fixed: 8
        }),
        costValue: chance.floating({
            min: 1000,
            max: 1000000,
            fixed: 8
        })
    };

    return investment;
};

export const resetInvestments = () => {
    currentInvestment = 1;
};

const incrementInvestment = (investmentId) => {
    investmentId += chance.natural({
        min: 1,
        max: 10
    });

    currentInvestment = investmentId;

    return investmentId;

};
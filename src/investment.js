import Chance from 'chance';
import {
    createLots
} from './lot';

let chance = new Chance();

export const createInvestments = () => {
    let currentInvestmentId = 1;
    let investments = [];
    let numberOfInvestments = chance.natural({
        min: 200,
        max: 600
    });

    for (let i = 0; i < numberOfInvestments; i++) {
        let currentInvestment = createInvestment(currentInvestmentId);
        currentInvestmentId = currentInvestment.investmentId;
        investments.push(currentInvestment);
    }

    return investments;

};

const createInvestment = (currentInvestment) => {
    const investment = {
        investmentId: incrementInvestment(currentInvestment),
        positionPrice: chance.floating({
            min: 0.1,
            max: 10000,
            fixed: 8
        }),
        quantity: chance.natural({
            min: 20,
            max: 100000
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
        }),
        lots: createLots()
    };

    return investment;
};


const incrementInvestment = (investmentId) => {
    investmentId += chance.natural({
        min: 1,
        max: 10
    });

    return investmentId;

};
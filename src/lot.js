import Chance from 'chance';

let chance = new Chance();



export const createLots = () => {
    let currentLotId = 1;
    let lots = [];
    let numberOfLots = chance.natural({
        min: 6,
        max: 250
    });

    for (let i = 0; i < numberOfLots; i++) {
        let currentLot = createLot(currentLotId);
        currentLotId = currentLot.lotId;
        lots.push(currentLot);
    }

    return lots;

};

const createLot = (currentLot) => {
    const investment = {
        lotId: incrementLot(currentLot),
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
        })
    };

    return investment;
};

const incrementLot = (lotId) => {
    lotId += chance.natural({
        min: 1,
        max: 10
    });


    return lotId;

};
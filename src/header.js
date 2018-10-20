import {
    v4
} from 'uuid';

export const createHeader = () => {
    const header = {
        header: {
            generatedDateTime: (new Date()).toISOString(),
            messageId: v4(),
            otherHeader: "test"
        }
    };
    return header;
};
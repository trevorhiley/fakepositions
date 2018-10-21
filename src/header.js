import {
    v4
} from 'uuid';
import moment from 'moment';

export const createHeader = () => {
    const header = {
        header: {
            generatedDateTime: moment().format('YYYY-MM-DD hh:mm:ss'),
            messageId: v4()
        }
    };
    return header;
};
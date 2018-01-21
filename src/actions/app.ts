import { GET_TITLE } from './constants';
import axios from 'axios';

export function getTitle(title: string) {
    return (dispatch: Function) => {
        axios.get('/title').then((res: any) => {
            dispatch(getTitleSuccess(res.data.title));
        });
    };
}

function getTitleSuccess(title: string) {
    return {
        type: GET_TITLE,
        value: title,
    };
}

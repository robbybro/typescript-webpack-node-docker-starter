import { GET_TITLE } from '../actions/constants';

export default function app(
    state = { title: 'Loading...' },
    action: { type: string; value: string },
) {
    switch (action.type) {
        case GET_TITLE:
            return {
                ...state,
                title: action.value,
            };
        default:
            return state;
    }
}

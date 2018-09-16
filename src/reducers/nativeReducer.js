import { GET_GEO_COORDS } from '../actions/types';

const initialState = {
    geo: {}
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_GEO_COORDS:
            return {
                ...state,
                geo: action.payload
            }
        default:
            return state;
    }
}
import {LOGIN, RESET_LOGIN_RESPONSE} from "../actions/types";

const initialState = {
    items: [],
    item: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                item: action.payload,
            };
        case RESET_LOGIN_RESPONSE:
            return {
                ...state,
                item: {},
            }
        default:
            return state;
    }

}
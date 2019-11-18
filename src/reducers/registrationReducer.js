import {REGISTRATION, RESET_REGISTRATION_RESPONSE} from "../actions/types";

const initialState = {
    item: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTRATION:
            return {
                ...state,
                item: action.payload,
            };
        case RESET_REGISTRATION_RESPONSE:
            return {
                ...state,
                item: {},
            }
        default:
            return state;
    }

}
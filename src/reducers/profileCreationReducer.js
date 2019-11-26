import {PROFILE_STORE_THEMES} from "../actions/types";

const initialState = {
    themes: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROFILE_STORE_THEMES:
            return {
                ...state,
                themes: action.payload,
            };
        default:
            return state;
    }

}
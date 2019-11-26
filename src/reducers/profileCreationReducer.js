import {PROFILE_STORE_THEMES,PROFILE_STORE_LOCATION,PROFILE_STORE_TYPE,PROFILE_STORE_WOKRERS,PROFILE_STORE_STARTYEAR} from "../actions/types";

const initialState = {
    themes: [],
    location: {},
    types: [],
    workers: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROFILE_STORE_THEMES:
            return {
                ...state,
                themes: action.payload,
            };
        case PROFILE_STORE_LOCATION:
            return {
                ...state,
                location: action.payload
            };
        case PROFILE_STORE_TYPE:
            return {
                ...state,
                types: action.payload
            };
        case PROFILE_STORE_WOKRERS:
            return {
                ...state,
                workers: action.payload
            };
        case PROFILE_STORE_STARTYEAR:
            return {
                ...state,
                startYear: action.payload
            };
        default:
            return state;
    }

}
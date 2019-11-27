import {
    PROFILE_STORE_THEMES,
    PROFILE_STORE_LOCATION,
    PROFILE_STORE_TYPE,
    PROFILE_STORE_WOKRERS,
    PROFILE_STORE_STARTYEAR,
    PROFILE_STORE_LAWFORMS,
    PROFILE_STORE_BAGS,
    GET_PROFILE,
} from "../actions/types";

const initialState = {
    themes: [],
    location: null,
    types: null,
    workers: [0,150],
    startYear: [1900, new Date().getFullYear()],
    lawForms: [],
    bags: []
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
        case PROFILE_STORE_LAWFORMS:
            return {
                ...state,
                lawForms: action.payload
            }
        case PROFILE_STORE_BAGS:
            return {
                ...state,
                bags: action.payload
            }
        case GET_PROFILE:
            return {
                ...state
            }
        default:
            return state;
    }

}
import {PROFILE_STORE_THEMES,PROFILE_STORE_LOCATION,PROFILE_STORE_TYPE} from "./types";

export const storeThemes = (data) => dispatch =>  {
	dispatch({
		payload: data,
		type: PROFILE_STORE_THEMES
	})
};

export const storeLocation = (data) => dispatch => {
	dispatch({
		payload: data,
		type: PROFILE_STORE_LOCATION
	})
}

export const storeTypes = (data) => dispatch => {
	dispatch({
		payload: data,
		type: PROFILE_STORE_TYPE
	})
}



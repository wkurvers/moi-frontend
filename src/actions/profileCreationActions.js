import {
	PROFILE_STORE_THEMES,
	PROFILE_STORE_LOCATION,
	PROFILE_STORE_TYPE,
	PROFILE_STORE_WOKRERS,
	PROFILE_STORE_STARTYEAR,
	PROFILE_STORE_LAWFORMS,
	PROFILE_STORE_BAGS,
	GET_PROFILE,
} from "./types";

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

export const storeWorkers = (data) => dispatch => {
	dispatch({
		payload: data,
		type: PROFILE_STORE_WOKRERS
	})
}

export const storeStartYear = (data) => dispatch => {
	dispatch({
		payload: data,
		type: PROFILE_STORE_STARTYEAR
	})
}

export const storeLawForms = (data) => dispatch => {
	dispatch({
		payload: data,
		type: PROFILE_STORE_LAWFORMS
	})
}

export const storeBAGs = (data) => dispatch => {
	dispatch({
		payload: data,
		type: PROFILE_STORE_BAGS
	})
}

export const getProfile = () => dispatch => {
	dispatch({
		type: GET_PROFILE
	})
}



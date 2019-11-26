import {PROFILE_STORE_THEMES} from "./types";

export const storeThemes = (data) => dispatch =>  {
	dispatch({
		payload: data,
		type: PROFILE_STORE_THEMES
	})
};



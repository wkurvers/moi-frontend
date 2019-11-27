import {FETCH_USERS,NEW_USER} from "./types";

export const fetchUsers = () => dispatch =>  {
    fetch(API_URL + '/api/user/')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            payload: data,
        }));
};



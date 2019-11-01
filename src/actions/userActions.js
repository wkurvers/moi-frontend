import {FETCH_USERS,NEW_USER} from "./types";

export const fetchUsers = () => dispatch =>  {
    fetch('http://localhost:8000/api/user/')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            payload: data,
        }));
};

export const createUser = (userData) => dispatch =>  {
    fetch('http://localhost:8000/api/user/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data =>  dispatch({
            type: NEW_USER,
            payload: data,
        }))
};



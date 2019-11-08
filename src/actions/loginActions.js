import {LOGIN} from "./types";

export const loginUser = (loginData) => dispatch =>  {
    fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(res => res.json())
        .then(data =>  dispatch({
            type: LOGIN,
            payload: data,
        }))
};



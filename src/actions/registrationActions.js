import {REGISTRATION} from "./types";

export const registerUser = (loginData) => dispatch =>  {
    fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(res => res.json())
        .then(data =>  dispatch({
            type: REGISTRATION,
            payload: data,
        }))
};


import {REGISTRATION} from "./types";

export const registerUser = (registerData) => dispatch =>  {
    console.log(registerData)
    fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(registerData)
    })
        .then(res => res.json())
        .then(data =>  dispatch({
            type: REGISTRATION,
            payload: data,
        }))
};


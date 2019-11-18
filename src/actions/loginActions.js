import {LOGIN, RESET_LOGIN_RESPONSE} from "./types";

export const loginUser = (loginData) => dispatch =>  {
    fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(res => res.json()
    .then(data => {
        data.status = res.status
        dispatch({
            type: LOGIN,
            payload: data,
        })
    }).catch(data => {
        data.status = res.status
        dispatch({
            type: LOGIN,
            payload: data,
        })
    })
    )
};


export const resetResponse = () => dispatch => {
    dispatch({
        type: RESET_LOGIN_RESPONSE,
    })
};


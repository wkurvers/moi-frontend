import {LOGIN, RESET_LOGIN_RESPONSE} from "./types";
import {API_URL} from "../conf.js";
export const loginUser = (loginData) => dispatch =>  {
    fetch(API_URL + '/api/token/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(res => res.json()
    .then(data => {
        data.status = res.status;
        dispatch({
            type: LOGIN,
            payload: data,
        })
    }).catch(data => {
        data.status = res.status;
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


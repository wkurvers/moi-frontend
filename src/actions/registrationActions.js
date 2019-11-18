import {REGISTRATION, RESET_REGISTRATION_RESPONSE} from "./types";
export const registerUser = (registerData) => dispatch =>  {
    fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(registerData)
    })
    .then(res =>
        res.json()
    .then(data =>  {
        data.status = res.status
        dispatch({
            type: REGISTRATION,
             payload: data,
        })
    }).catch(data =>  {
            data.status = res.status
            dispatch({
                    type: REGISTRATION,
                    payload: data,
                })
        })
    )
};

export const resetResponse = () => dispatch => {
    dispatch({
        type: RESET_REGISTRATION_RESPONSE,
    })
};


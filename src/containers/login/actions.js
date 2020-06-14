export const LOGIN_SUCCESS = 'Auth/LOGIN_SUCCESS';

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: {
        user
    }
});

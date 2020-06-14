import { LOGIN_SUCCESS } from './actions';

const initialState = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS: {
            const { user } = action.payload;

            return {
                ...state,
                ...user
            };
        };
        default: return state;
    }
};

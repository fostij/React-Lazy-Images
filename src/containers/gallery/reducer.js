import { LOAD_SUCCESS, LOAD_REQUEST } from './actions';

const initialState = {
    pictures: [],
    isLoading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case LOAD_SUCCESS: {
            const { pictures } = action.payload;

            return {
                ...state,
                pictures: [...state.pictures, ...pictures],
                isLoading: false
            };
        };
        default: return state;
    }
};

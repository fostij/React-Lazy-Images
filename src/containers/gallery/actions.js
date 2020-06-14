import axios from 'axios';

export const LOAD_REQUEST = 'Gallery/LOAD_REQUEST';
export const LOAD_SUCCESS = 'Gallery/LOAD_SUCCESS';
export const loadSuccess = pictures => ({
    type: LOAD_SUCCESS,
    payload: {
        pictures
    }
});

export const loadImages = () => (dispatch, getState) => {
    const { gallery } = getState();

    dispatch({ type: LOAD_REQUEST });
        const apiRoot = "https://api.unsplash.com";
        const accessKey = process.env.REACT_APP_ACCESSKEY;

        return axios
            .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
            .then(res => dispatch(loadSuccess(res.data)));
    
};



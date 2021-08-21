import { setAlert } from './alert';
import axios from 'axios';
import {
    GET_COWS,
    COW_ERROR,
    DELETE_COW,
    ADD_COW,
    GET_COW,
    ADD_COMMENT,
    REMOVE_COMMENT
} from './types';

// Get cows
export const getCows = () => async dispatch => {
    try {
        const res = await axios.get('/api/cows');

        dispatch({
            type: GET_COWS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: COW_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};



// Delete cow
export const deleteCow = id => async dispatch => {
    try {
        await axios.delete(`/api/cows/${id}`);

        dispatch({
            type: DELETE_COW,
            payload: id
        });

        dispatch(setAlert('Cow Removed', 'success'));
    } catch (err) {
        dispatch({
            type: COW_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add cow
export const addCow = formData => async dispatch => {
    try {
        const res = await axios.post('/api/cows', formData);

        dispatch({
            type: ADD_COW,
            payload: res.data
        });

        dispatch(setAlert('Cow Added for Sale', 'success'));
    } catch (err) {
        dispatch({
            type: COW_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get cow
export const getCow = id => async dispatch => {
    try {
        const res = await axios.get(`/api/cows/${id}`);

        dispatch({
            type: GET_COW,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: COW_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add comment
export const addComment = (postId, formData) => async dispatch => {
    try {
        const res = await axios.post(`/api/cows/comment/${postId}`, formData);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        });

        dispatch(setAlert('Comment Added', 'success'));
    } catch (err) {
        dispatch({
            type: COW_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Delete comment
export const deleteComment = (cowId, commentId) => async dispatch => {
    try {
        await axios.delete(`/api/posts/comment/${cowId}/${commentId}`);

        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId
        });

        dispatch(setAlert('Comment Removed', 'success'));
    } catch (err) {
        dispatch({
            type: COW_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
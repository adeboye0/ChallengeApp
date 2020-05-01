import axios from 'axios';
import { GET_TRANSACTION, GET__SINGLE_TRANSACTION, ADD_TRANSACTION, DELETE_TRANSACTION, ADD_FAIL, LOADING } from './types';
import { returnErrors } from './errorActions';

export const getTransactions = () => async dispatch => {
    try {
        dispatch(setLoading());
        const res = await axios.get('http://localhost:5001/data');
        dispatch({
            type: GET_TRANSACTION,
            payload: res.data
        })
    } catch (err) { dispatch(returnErrors(err.response.data, err.response.status, null)) }
};

export const deleteTransaction = tnx_id => dispatch => {
    axios.delete(`http://localhost:5001/delete/${tnx_id}`).then(res => dispatch({
        type: DELETE_TRANSACTION,
        payload: tnx_id
    })).catch(err => dispatch(returnErrors(err.response.data, err.response.status, null)))
};

export const addTransaction = transaction => async dispatch => {
    try {
        dispatch(setLoading());
        const res = await axios.post('http://localhost:5001/add', transaction);
        dispatch({
            type: ADD_TRANSACTION,
            payload: res.data
        });
    } catch (err) {
        console.error(`Error Occured`, err);
        dispatch({ type: ADD_FAIL })
        dispatch(returnErrors(err.response.data, err.response.status, 'ADD_FAIL'));
    }
};

export const singleTransaction = tnx_id => async (dispatch) => {
    dispatch(setLoading());
    try {
        const res = await axios.get(`http://localhost:5001/data/${tnx_id}`);
        dispatch({
            type: GET__SINGLE_TRANSACTION,
            payload: res.data
        });
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status, null));
    }
};

export const setLoading = () => {
    return {
        type: LOADING
    }
};
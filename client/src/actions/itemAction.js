import axios from 'axios';
import {GET_ITEMS, NEW_SEARCH, ITEMS_LOADING, WEBSITE_NAME, HANDLE_CHANGE, SORT_TABLE} from '../actions/types';
import {push, } from "react-router-redux";

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            }))
};
export const newSearch = website => dispatch => {
    dispatch(setWebsiteName(website["domain"]));
    if (website["domain"].length === 0)    return;

    dispatch(push('/search='+website["domain"]));
    dispatch(setItemsLoading());

    axios
        .post('/api/items', website)
        .then(res =>
        dispatch({
            type: NEW_SEARCH,
            payload: res.data
        }));

    // return {
    //     type: NEW_SEARCH,
    //     payload: website
    // }
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};

export const setWebsiteName = (website) => {
    return {
        type: WEBSITE_NAME,
        payload: website
    }
};

export const handleChange = (event) => dispatch => {
    // console.log(event.target.value);
    // console.log(event.target.value);

    dispatch( {
        type: HANDLE_CHANGE,
        payload: event
    })
};

export const sortTable = (sortFunc) => dispatch => {
    dispatch( {
        type: SORT_TABLE,
        payload: sortFunc
    })
};
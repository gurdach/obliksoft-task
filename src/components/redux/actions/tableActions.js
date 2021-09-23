import { READ_MESSAGE, SET_ITEMS, SORT_ITEMS, FIND_ITEM } from './types';

// action-creators
const setData = (array) => ({
    type: SET_ITEMS,
    payload: array
})

export const sortItems = () => ({
    type: SORT_ITEMS
})

export const readMessage = (id) => ({
    type: READ_MESSAGE,
    payload: id
})

export const queryPhone = (term) => ({
    type: FIND_ITEM,
    payload: term
})

// redux-thunk function
export const fetchData = () => async dispatch => {
    const data = await fetch(`/db.json`).then(res => res.json());
    dispatch(setData(data));
    dispatch(sortItems());
}
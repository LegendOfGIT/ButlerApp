import 'isomorphic-fetch';
import {
    FETCH_CHANNEL_DATA,
    FETCH_CHANNEL_DATA_SUCCESS
} from './ActionTypes';

function fetchChannelDataSuccess(json)
{
    return {
        type: FETCH_CHANNEL_DATA_SUCCESS,
        payload: json
    };
}

export function fetchChannelData()
{
    return (dispatch, getState) => {
        dispatch({ type: FETCH_CHANNEL_DATA });

        return fetch('/api/getChannel')
            .then(response => dispatch(fetchChannelDataSuccess(response.json())))
    };
}
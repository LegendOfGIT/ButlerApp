import 'isomorphic-fetch';
import {
    FETCH_CHANNEL_DATA_SUCCESS,
    FETCH_CHANNEL_IS_LOADING
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
    return (dispatch) => {
        dispatch({ type: FETCH_CHANNEL_DATA_SUCCESS });

        return {
            type: FETCH_CHANNEL_IS_LOADING,
            payload: false
        };
    }
};
import 'isomorphic-fetch';
import {
    FETCH_CHANNEL_DATA_SUCCESS,
    FETCH_CHANNEL_HAS_ERROR,
    FETCH_CHANNEL_IS_LOADING
} from './ActionTypes';

function fetchChannelHasError(hasError) {
    return {
        type: FETCH_CHANNEL_HAS_ERROR,
        payload: hasError
    }
}
function fetchChannelIsLoading(isLoading) {
    return {
        type: FETCH_CHANNEL_IS_LOADING,
        payload: isLoading
    }
}
function fetchChannelDataSuccess(channel) {
    return {
        type: FETCH_CHANNEL_DATA_SUCCESS,
        payload: channel
    }
}

export function fetchChannelData()
{
    return (dispatch) => {
        dispatch(fetchChannelHasError(false));
        dispatch(fetchChannelIsLoading(true));
        return fetch('http://127.0.0.1:12354/InformationChannelService/GetChannel')
            .then((response) => {
                if (!response.ok) {
                    throw Error('Service error');
                }

                return response;
            })
            .then((response) => {
                dispatch(fetchChannelIsLoading(false));

                const jsonResponse = response.json();
                return jsonResponse;
            })
            .then((channel) =>{
                dispatch(fetchChannelDataSuccess(channel));
            })
            .catch(() => {
                dispatch(fetchChannelHasError(true));
            });
    }
}
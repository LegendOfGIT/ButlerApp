import 'isomorphic-fetch';
import {
    FETCH_CHANNEL_DATA_SUCCESS,
    FETCH_CHANNEL_HAS_ERROR,
    FETCH_CHANNEL_IS_LOADING,
    FETCH_CHANNEL_ITEM_DATA_SUCCESS,
    FETCH_CHANNEL_ITEM_HAS_ERROR,
    FETCH_CHANNEL_ITEM_IS_LOADING
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
        return fetch('http://localhost:56991/InformationChannelService.svc/GetChannel/Sport')
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
            .catch((e) => {
                dispatch(fetchChannelHasError(true));
            });
    }
}

function fetchChannelItemHasError(itemId, hasError) {
    return {
        type: FETCH_CHANNEL_ITEM_HAS_ERROR,
        payload: {
            itemId: itemId,
            hasError: hasError
        }
    }
}
function fetchChannelItemIsLoading(itemId, isLoading) {
    return {
        type: FETCH_CHANNEL_ITEM_IS_LOADING,
        payload: {
            itemId: itemId,
            isLoading: isLoading
        }
    }
}
function fetchChannelItemDataSuccess(channelItem) {
    return {
        type: FETCH_CHANNEL_ITEM_DATA_SUCCESS,
        payload: channelItem
    }
}

export function fetchChannelItemData(itemId)
{
    return (dispatch) => {
        dispatch(fetchChannelItemHasError(itemId, false));
        dispatch(fetchChannelItemIsLoading(itemId, true));
        return fetch('http://localhost:56991/InformationChannelService/GetChannelItem/' + itemId)
            .then((response) => {
                if (!response.ok) {
                    throw Error('Service error');
                }

                return response;
            })
            .then((response) => {
                dispatch(fetchChannelItemIsLoading(itemId, false));

                const jsonResponse = response.json();
                return jsonResponse;
            })
            .then((channelItem) =>{
                dispatch(fetchChannelItemDataSuccess(channelItem));
            }).catch(() => {
                dispatch(fetchChannelItemHasError(itemId,true));
            });
    }
}
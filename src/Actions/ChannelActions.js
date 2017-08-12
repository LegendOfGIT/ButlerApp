import 'isomorphic-fetch';
import {
    FETCH_CHANNEL_DATA_SUCCESS
} from './ActionTypes';

export function fetchChannelData()
{
    return (dispatch) => {
        return fetch('http://127.0.0.1:12354/InformationChannelService/GetChannel')
            .then((response) => {
                const jsonResponse = response.json();
                return jsonResponse;
            })
            .then((channel) =>{
                dispatch({
                    type:  FETCH_CHANNEL_DATA_SUCCESS,
                    payload: channel
                });
            });
    }
}
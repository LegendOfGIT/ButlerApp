import { FETCH_CHANNEL_DATA_SUCCESS } from '../Actions/ActionTypes'

const initialState = {
    title: '',
    channelItems: []
};

export function channel(state = initialState, action) {
    switch (action.type) {
        case FETCH_CHANNEL_DATA_SUCCESS:
            return action.payload

        default:
            return state
    }
}
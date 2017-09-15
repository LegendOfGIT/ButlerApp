import {
    FETCH_CHANNEL_DATA_SUCCESS,
    FETCH_CHANNEL_HAS_ERROR,
    FETCH_CHANNEL_IS_LOADING
} from '../Actions/ActionTypes'

const initialState = {
    title: '',
    channelItems: []
};

export function channel(state = initialState, action) {
    switch (action.type) {
        case FETCH_CHANNEL_DATA_SUCCESS:
            return action.payload;

        case FETCH_CHANNEL_HAS_ERROR:
            return { hasError: action.payload };

        case FETCH_CHANNEL_IS_LOADING:
            return { isLoading: action.payload };

        default:
            return state
    }
}
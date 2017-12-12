import {
    FETCH_CHANNEL_ITEM_DATA_SUCCESS,
    FETCH_CHANNEL_ITEM_HAS_ERROR,
    FETCH_CHANNEL_ITEM_IS_LOADING
} from '../Actions/ActionTypes'

const initialState = { };

export function channelItems(state = initialState, action) {
    switch (action.type) {
        case FETCH_CHANNEL_ITEM_DATA_SUCCESS: {
            let data = {};
            data[action.payload.ChannelItemId] = {
                description: action.payload.Description,
                descriptionExcerpt: action.payload.DescriptionExcerpt,
                mainImageUrl: action.payload.MainImageUrl,
                title: action.payload.Title
            };

            return {
                ...state,
                ...data
            };
        }

        case FETCH_CHANNEL_ITEM_HAS_ERROR:
            return {
                ...state,
                hasError: action.payload
            };

        case FETCH_CHANNEL_ITEM_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        default:
            return state
    }
}
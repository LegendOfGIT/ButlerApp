import { channelItems } from './ChannelItemReducer'
import {
    FETCH_CHANNEL_ITEM_DATA_SUCCESS,
    FETCH_CHANNEL_ITEM_HAS_ERROR,
    FETCH_CHANNEL_ITEM_IS_LOADING
} from '../Actions/ActionTypes'

describe('Channel-Item Reducer', () => {
    it('should return the initial state', () => {
        expect(channelItems(undefined, {})).toEqual({});
    });

    it('should handle ' + FETCH_CHANNEL_ITEM_IS_LOADING, () => {
        expect(
            channelItems([], {
                type: FETCH_CHANNEL_ITEM_IS_LOADING,
                payload: true
            })
        ).toEqual({
            isLoading: true
        });
    });

    it('should handle ' + FETCH_CHANNEL_ITEM_HAS_ERROR, () => {
        expect(
            channelItems([], {
                type: FETCH_CHANNEL_ITEM_HAS_ERROR,
                payload: true
            })
        ).toEqual({
            hasError: true
        });
    });

    it('should handle ' + FETCH_CHANNEL_ITEM_DATA_SUCCESS, () => {
        const payload = {
            ChannelItemId: 'AAABBBCCCDDD',
            Description: 'This is the description',
            DescriptionExcerpt: 'This is the desc...',
            MainImageUrl: 'http://www.steampoweredstore.com/images/app/23123/image1.jpg',
            Title: 'Test information A'
        };

        expect(
            channelItems({}, {
                type: FETCH_CHANNEL_ITEM_DATA_SUCCESS,
                payload: payload
            })
        ).toEqual({
            AAABBBCCCDDD: {
                description: 'This is the description',
                descriptionExcerpt: 'This is the desc...',
                mainImageUrl: 'http://www.steampoweredstore.com/images/app/23123/image1.jpg',
                title: 'Test information A'
            }
        });
    });
});
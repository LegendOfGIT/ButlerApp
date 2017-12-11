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
            ChannelItemId: 'AAA-BBB-CCC-DDD',
            Title: 'Test information A'
        };

        expect(
            channelItems({}, {
                type: FETCH_CHANNEL_ITEM_DATA_SUCCESS,
                payload: payload
            })
        ).toEqual({
            "AAA-BBB-CCC-DDD": {
                "title": 'Test information A'
            }
        });
    });
});
import channel from './ChannelReducer'
import { FETCH_CHANNEL_DATA_SUCCESS } from '../Actions/ActionTypes'

describe('Channel Reducer', () => {
    it('should return the initial state', () => {
        expect(channel(undefined, {})).toEqual({
            title: '',
            channelItems: []
        });
    });

    it('should handle ' + FETCH_CHANNEL_DATA_SUCCESS, () => {
        const payload = {
            title: 'Test Channel',
            channelItems:[
                { id: 'ChannelItem ID A' },
                { id: 'ChannelItem ID B' },
                { id: 'ChannelItem ID C' }
            ]
        };

        expect(
            channel([], {
                type: FETCH_CHANNEL_DATA_SUCCESS,
                payload: payload
            })
        ).toEqual(
            payload
        );
    });
});
import { fetchChannelData } from './ChannelActions';
import { FETCH_CHANNEL_DATA_SUCCESS } from './ActionTypes';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
const store = mockStore();

const httpCodes = {
    success: 200,
    internalServerError: 500
};

describe('Channel Actions', () => {
    it('calls action ' + FETCH_CHANNEL_DATA_SUCCESS + ' when the fetch response was successful', () => {
        window.fetch =
            jest.fn().mockImplementation(
                () => Promise.resolve(
                    new window.Response(
                        '{ title: "Aktivitäten in Hannover", channelItems: [{ id: "AAA-BBB-CCC" },{ id: "BBB-CCC-DDD" },{ id: "CCC-DDD-EEE"}] }',
                        {
                            status: httpCodes.success,
                            headers: {
                                'Content-type': 'application/json'
                            }
                        }
                    )
                )
            );

        return store.dispatch(fetchChannelData())
            .then(() => {
                const triggeredActions = store.getActions();
                expect(triggeredActions).toEqual([
                    { type: FETCH_CHANNEL_DATA_SUCCESS }
                ]);
            });
    });
});


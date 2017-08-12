import { fetchChannelData } from './ChannelActions';
import { FETCH_CHANNEL_DATA_SUCCESS } from './ActionTypes';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore();

const httpCodes = {
    success: 200,
    internalServerError: 500
};

describe('Channel Actions', () => {
    it('calls action ' + FETCH_CHANNEL_DATA_SUCCESS + ' with response in payload, when the fetch response was successful', () => {
        const payload = {
            channelItems: [
                { id: "AAA-BBB-CCC" },
                { id: "BBB-CCC-DDD" },
                { id: "CCC-DDD-EEE"}
            ],
            title: "Aktivitäten in Hannover"
        };

        window.fetch =
            jest.fn().mockImplementation(
                () => Promise.resolve({
                    json: () => Promise.resolve(payload)
                })
            );

        store.dispatch(fetchChannelData()).then(() => {
            const triggeredActions = store.getActions();
            expect(triggeredActions).toEqual([
                { type: FETCH_CHANNEL_DATA_SUCCESS, payload: payload }
            ]);
        });
    });
});


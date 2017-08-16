import { fetchChannelData } from './ChannelActions';
import {
    FETCH_CHANNEL_DATA_SUCCESS,
    FETCH_CHANNEL_HAS_ERROR,
    FETCH_CHANNEL_IS_LOADING
} from './ActionTypes';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore();

global.fetch = require('jest-fetch-mock');

describe('Channel Actions', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('calls action ' + FETCH_CHANNEL_DATA_SUCCESS + ' with response in payload, when the fetch response was successful', () => {
        const payload = {
            channelItems: [
                { id: "AAA-BBB-CCC" },
                { id: "BBB-CCC-DDD" },
                { id: "CCC-DDD-EEE"}
            ],
            title: "Aktivitäten in Hannover"
        };

        fetch.mockResponseOnce(JSON.stringify(payload));

        store.dispatch(fetchChannelData()).then(() => {
            const triggeredActions = store.getActions();
            expect(triggeredActions).toEqual([
                { type: FETCH_CHANNEL_HAS_ERROR, payload: false },
                { type: FETCH_CHANNEL_IS_LOADING, payload: true },
                { type: FETCH_CHANNEL_IS_LOADING, payload: false },
                { type: FETCH_CHANNEL_DATA_SUCCESS, payload: payload }
            ]);
        });
    });

    it('calls action ' + FETCH_CHANNEL_HAS_ERROR + ', when the fetch response was unsuccessful', () => {
        const payload = {
            channelItems: [
                { id: "AAA-BBB-CCC" },
                { id: "BBB-CCC-DDD" },
                { id: "CCC-DDD-EEE"}
            ],
            title: "Aktivitäten in Hannover"
        };

        fetch.mockRejectOnce();

        store.dispatch(fetchChannelData()).then().catch(() => {
            const triggeredActions = store.getActions();
            expect(triggeredActions).toEqual([
                { type: FETCH_CHANNEL_HAS_ERROR, payload: false },
                { type: FETCH_CHANNEL_IS_LOADING, payload: true },
                { type: FETCH_CHANNEL_HAS_ERROR, payload: true }
            ]);
        });
    });
});


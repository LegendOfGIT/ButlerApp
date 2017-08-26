import { fetchChannelData, fetchChannelItemData } from './ChannelActions';
import {
    FETCH_CHANNEL_DATA_SUCCESS,
    FETCH_CHANNEL_HAS_ERROR,
    FETCH_CHANNEL_IS_LOADING,
    FETCH_CHANNEL_ITEM_DATA_SUCCESS,
    FETCH_CHANNEL_ITEM_HAS_ERROR,
    FETCH_CHANNEL_ITEM_IS_LOADING
} from './ActionTypes';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureStore(middleware);
let store;

global.fetch = require('jest-fetch-mock');

describe('Channel Actions', () => {
    beforeEach(() => {
        fetch.resetMocks();
        store = mockStore();
    });

    describe('Action fetchChannelData', () => {
        it('calls action ' + FETCH_CHANNEL_DATA_SUCCESS + ' with response in payload, when the fetch response was successful', () => {
            const payload = {
                channelItems: [
                    { id: "AAA-BBB-CCC" },
                    { id: "BBB-CCC-DDD" },
                    { id: "CCC-DDD-EEE" }
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

    describe('Action fetchChannelItem', () => {
        it('calls action ' + FETCH_CHANNEL_ITEM_DATA_SUCCESS + ' with response in payload, when the fetch response was successful', () => {
            const itemId = 'AAA-BBB-CCC-DDD';
            const payload = {
                itemId: itemId,
                description: 'Channel item description',
                header: 'Channel item header',
                title: 'Channel item title'
            };

            fetch.mockResponseOnce(JSON.stringify(payload));

            store.dispatch(fetchChannelItemData(itemId)).then(() => {
                const triggeredActions = store.getActions();
                expect(triggeredActions).toEqual([
                    { type: FETCH_CHANNEL_ITEM_HAS_ERROR, payload: { itemId: itemId, hasError: false } },
                    { type: FETCH_CHANNEL_ITEM_IS_LOADING, payload: { itemId: itemId, isLoading: true } },
                    { type: FETCH_CHANNEL_ITEM_IS_LOADING, payload: { itemId: itemId, isLoading: false } },
                    { type: FETCH_CHANNEL_ITEM_DATA_SUCCESS, payload: payload }
                ]);
            });
        });

        it('calls action ' + FETCH_CHANNEL_ITEM_HAS_ERROR + ', when the fetch response was unsuccessful', () => {
            const itemId = 'AAA-BBB-CCC-DDD';
            fetch.mockRejectOnce();

            store.dispatch(fetchChannelItemData(itemId)).then().catch(() => {
                const triggeredActions = store.getActions();
                expect(triggeredActions).toEqual([
                    { type: FETCH_CHANNEL_ITEM_HAS_ERROR, payload: { itemId: itemId, hasError: false } },
                    { type: FETCH_CHANNEL_ITEM_IS_LOADING, payload: { itemId: itemId, isLoading: true } },
                    { type: FETCH_CHANNEL_ITEM_HAS_ERROR, payload: { itemId: itemId, hasError: true } }
                ]);
            });
        });
    });
});


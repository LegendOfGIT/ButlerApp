import React from 'react';
import ChannelComponent from './ChannelComponent';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock(
    '../Containers/ChannelItemContainer',
    () =>
        { return (props) => <div {...props}>ChannelItemContainer</div>; }
);

jest.mock(
    'react-swipe-card/Cards',
    () => {
        return (props) => <div {...props}>Cards</div>;
    }
);

const mockFetchChannelDataFn = jest.fn();
jest.mock(
    '../Actions/ChannelActions',
    () => ({
        fetchChannelData: () => ({
            type: 'test'
        })
    })
);

const mockStore = configureStore();
const mockStoreDefault = {
    channel: { }
};

describe('Channel Component', () => {
    it('renders without crashing', () => {
        expect(TestRenderer.create(
            <Provider dispatch={jest.fn()} store={mockStore(mockStoreDefault)}>
                <ChannelComponent/>
            </Provider>
        ).toJSON()).toMatchSnapshot();
    });

    it('shows loading animation, when loading state in store is active', () => {
        const store = mockStore({
            channel: {
                isLoading: true
            }
        });
        expect(TestRenderer.create(
            <Provider dispatch={jest.fn()} store={store}>
                <ChannelComponent/>
            </Provider>
        ).toJSON()).toMatchSnapshot();
    });

    it('shows channel title from store', () => {
        const store = mockStore({
            channel: {
                ChannelId: 'Fernsehprogramm: Pro-Sieben'
            }
        });
        expect(TestRenderer.create(
            <Provider dispatch={jest.fn()} store={store}>
                <ChannelComponent/>
            </Provider>
        ).toJSON()).toMatchSnapshot();
    });

    it('shows channel-items from store', () => {
        const store = mockStore({
            channel: {
                InformationItemIds: [
                    'AAA-BBB-CCC-DDD',
                    'BBB-CCC-DDD-EEE',
                    'CCC-DDD-EEE-FFF'
                ]
            }
        });
        expect(TestRenderer.create(
            <Provider dispatch={jest.fn()} store={store}>
                <ChannelComponent/>
            </Provider>
        ).toJSON()).toMatchSnapshot();
    });

    it('shows an error, when error state in store is active', () => {
        const store = mockStore({
            channel: {
                hasError: true
            }
        });
        expect(TestRenderer.create(
            <Provider dispatch={jest.fn()} store={store}>
                <ChannelComponent/>
            </Provider>
        ).toJSON()).toMatchSnapshot();
    });

    it('calls fetchChannelData Action, when component is mount', () => {
        const dispatchStore = mockStore(mockStoreDefault);
        TestRenderer.create(
            <Provider dispatch={jest.fn()} store={dispatchStore}>
                <ChannelComponent />
            </Provider>
        );
        expect(dispatchStore.getActions()).toEqual([{
            type: 'test'
        }]);
    });
});


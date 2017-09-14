import React from 'react';
import ChannelComponent from './ChannelComponent';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock(
    '../Containers/ChannelItemContainer',
    () =>
        { return () => <div>ChannelItemContainer</div>; }
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

describe('Channel Component', () => {
    it('renders without crashing', () => {
        expect(TestRenderer.create(
            <Provider dispatch={jest.fn()} store={mockStore({})}><ChannelComponent/></Provider>
        ).toJSON()).toMatchSnapshot();
    });

    it('calls fetchChannelData Action, when component is mount', () => {
        const dispatchStore = mockStore({});
        TestRenderer.create(<Provider dispatch={jest.fn()} store={dispatchStore}><ChannelComponent /></Provider>);
        expect(dispatchStore.getActions()).toEqual([{
            type: 'test'
        }]);
    });
});


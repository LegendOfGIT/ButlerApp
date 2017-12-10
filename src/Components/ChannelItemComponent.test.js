import React from 'react';
import ChannelItemComponent from './ChannelItemComponent';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockFetchChannelDataFn = jest.fn();
jest.mock(
    '../Actions/ChannelActions',
    () => ({
        fetchChannelItemData: () => ({
            type: 'FETCH_CHANNEL_ITEM'
        })
    })
);

const mockStore = configureStore();

describe('ChannelItem Component', () => {
    it('renders without crashing', () => {
        expect(TestRenderer.create(<ChannelItemComponent/>).toJSON()).toMatchSnapshot();
    });

    it('renders information "id" when property is set', () => {
        const props = { id: 'AAA-BBB-CCC-DDD' };
        expect(TestRenderer.create(<ChannelItemComponent {...props} />).toJSON()).toMatchSnapshot();
    });

    it('renders information "title" when property is set', () => {
        const props = { title: 'The Simpsons in 10 Minuten auf Pro-Sieben' };
        expect(TestRenderer.create(<ChannelItemComponent {...props} />).toJSON()).toMatchSnapshot();
    });

    it('renders information "header" when property is set', () => {
        const props = { header: 'Staffel: 5, Episode: 1, Titel: Homer und die Sangesbrüder' };
        expect(TestRenderer.create(<ChannelItemComponent {...props} />).toJSON()).toMatchSnapshot();
    });

    it('renders information "description" when property is set', () => {
        const props = {
            description: 'Lisa und Bart vertreiben sich die Zeit auf dem Flohmarkt. Dort entdecken sie zu...'
        };
        expect(TestRenderer.create(<ChannelItemComponent {...props} />).toJSON()).toMatchSnapshot();
    });

    it('calls fetchChannelItemData Action, when component is mount', () => {
        const dispatchStore = mockStore({});
        TestRenderer.create(
            <Provider dispatch={jest.fn()} store={dispatchStore}>
                <ChannelItemComponent />
            </Provider>
        );
        expect(dispatchStore.getActions()).toEqual([{
            type: 'FETCH_CHANNEL_ITEM'
        }]);
    });
});


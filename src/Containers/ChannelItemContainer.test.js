import React from 'react';
import ChannelItemContainer from './ChannelItemContainer';
import ChannelItemComponent from '../Components/ChannelItemComponent';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { FETCH_CHANNEL_ITEM_DATA } from '../Actions/ActionTypes';

const mockStore = configureStore();
const store = mockStore({
    ChannelItems: [
        {
            id: 'TestItem A ID',
            description: 'TestItem A Description',
            header: 'TestItem A Header',
            title: 'TestItem A Title'
        },
        {
            id: 'TestItem B ID',
            description: 'TestItem B Description',
            header: 'TestItem B Header',
            title: 'TestItem B Title'
        },
        {
            id: 'TestItem C ID',
            description: 'TestItem C Description',
            header: 'TestItem C Header',
            title: 'TestItem C Title'
        }
    ]
});

describe('ChannelItem Container', () => {
    let Component, wrapper;

    describe('Specific ChannelItem', () => {
        it('should compose empty ChannelItem, when there are no ChannelItems in store', () => {
            const props = {
                id: 'TestItem A ID'
            };
            const emptyStore = mockStore({});
            wrapper = mount(
                <Provider store={emptyStore}>
                    <ChannelItemContainer {...props} />
                </Provider>
            );

            Component = wrapper.find(ChannelItemContainer).find(ChannelItemComponent);
            const properties = Component.nodes[0].props;
            expect(properties['description']).toEqual('');
            expect(properties['header']).toEqual('');
            expect(properties['title']).toEqual('');
        });

        it('should compose empty ChannelItem, when it does not exist in store', () => {
            const props = {
                id: 'TestItem X ID'
            };
            wrapper = mount(
                <Provider store={store}>
                    <ChannelItemContainer {...props} />
                </Provider>
            );

            Component = wrapper.find(ChannelItemContainer).find(ChannelItemComponent);
            const properties = Component.nodes[0].props;
            expect(properties['description']).toEqual('');
            expect(properties['header']).toEqual('');
            expect(properties['title']).toEqual('');
        });

        it('should get all ChannelItem information, when it exists in store', () => {
            const props = {
                id: 'TestItem C ID'
            };
            wrapper = mount(
                <Provider store={store}>
                    <ChannelItemContainer {...props} />
                </Provider>
            );

            Component = wrapper.find(ChannelItemContainer).find(ChannelItemComponent);
            const properties = Component.nodes[0].props;
            expect(properties['description']).toEqual('TestItem C Description');
            expect(properties['header']).toEqual('TestItem C Header');
            expect(properties['title']).toEqual('TestItem C Title');
        });
    });

    describe('Actions', () => {
        it('sets the fetchChannelData property on component to call the action', () => {
            Component = wrapper.find(ChannelItemContainer).find(ChannelItemComponent);
            const properties = Component.nodes[0].props;
            properties.fetchChannelItem('AAA-BBB-CCC-DDD');
            expect(store.dispatch).toHaveBeenCalledWith(
                {
                    type: FETCH_CHANNEL_ITEM_DATA,
                    payload: {
                        id: 'AAA-BBB-CCC-DDD'
                    }
                }
            );
        });
    });
});
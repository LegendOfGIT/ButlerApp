/**
 * @jest-environment jsdom
 */

import React from 'react';
import ChannelItemContainer from './ChannelItemContainer';
import ChannelItemComponent from '../Components/ChannelItemComponent';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import redux from 'redux';
const reduxMock = jest.mock('redux', () => ({
    ...redux,
    bindActionCreators: (actions) => (actions)
}));

jest.mock(
    '../Actions/ChannelActions',
    () => ({
        fetchChannelItemData: (itemId) => ({
            type: 'FETCH_CHANNEL_ITEM_DATA',
            payload: itemId
        })
    })
);

const mockStore = configureStore();
const store = mockStore({
    channelItems: {
        "TestItem A ID": {
            description: 'TestItem A Description',
            descriptionExcerpt: 'TestItem A Desc...',
            header: 'TestItem A Header',
            mainImageUrl: 'http://www.amazon.de/games/ASIN3223/image/a.jpg',
            title: 'TestItem A Title'
        },
        "TestItem B ID": {
            description: 'TestItem B Description',
            descriptionExcerpt: 'TestItem B Desc...',
            header: 'TestItem B Header',
            title: 'TestItem B Title'
        },
        "TestItem C ID": {
            id: '',
            description: 'TestItem C Description',
            descriptionExcerpt: 'TestItem C Desc...',
            header: 'TestItem C Header',
            mainImageUrl: 'http://www.amazon.de/games/ASIN3223/image/c.jpg',
            title: 'TestItem C Title'
        }
    }
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
                <Provider dispatch={jest.fn()} store={emptyStore}>
                    <ChannelItemContainer {...props} />
                </Provider>
            );

            Component = wrapper.find(ChannelItemContainer).find(ChannelItemComponent);
            const properties = Component.nodes[0].props;
            expect(properties['description']).toEqual('');
            expect(properties['descriptionExcerpt']).toEqual('');
            expect(properties['header']).toEqual('');
            expect(properties['title']).toEqual('');
            expect(properties['mainImageUrl']).toEqual('');
        });

        it('should compose empty ChannelItem, when it does not exist in store', () => {
            const props = {
                id: 'TestItem X ID'
            };
            wrapper = mount(
                <Provider dispatch={jest.fn()} store={store}>
                    <ChannelItemContainer {...props} />
                </Provider>
            );

            Component = wrapper.find(ChannelItemContainer).find(ChannelItemComponent);
            const properties = Component.nodes[0].props;
            expect(properties['description']).toEqual('');
            expect(properties['descriptionExcerpt']).toEqual('');
            expect(properties['header']).toEqual('');
            expect(properties['title']).toEqual('');
            expect(properties['mainImageUrl']).toEqual('');
        });

        it('should get all ChannelItem information, when it exists in store', () => {
            const props = {
                id: 'TestItem C ID'
            };
            wrapper = mount(
                <Provider dispatch={jest.fn()} store={store}>
                    <ChannelItemContainer {...props} />
                </Provider>
            );

            Component = wrapper.find(ChannelItemContainer).find(ChannelItemComponent);
            const properties = Component.nodes[0].props;
            expect(properties['description']).toEqual('TestItem C Description');
            expect(properties['descriptionExcerpt']).toEqual('TestItem C Desc...');
            expect(properties['header']).toEqual('TestItem C Header');
            expect(properties['title']).toEqual('TestItem C Title');
            expect(properties['mainImageUrl']).toEqual('http://www.amazon.de/games/ASIN3223/image/c.jpg');
        });
    });

    describe('Actions', () => {
        it('sets the fetchChannelItemData property on component to call the action', () => {
            const props = {
                id: 'TestItem C ID'
            };
            wrapper = mount(
                <Provider dispatch={jest.fn()} store={store}>
                    <ChannelItemContainer {...props} />
                </Provider>
            );

            const itemId = 'AAA-BBB-CCC-DDD';
            Component = wrapper.find(ChannelItemContainer).find(ChannelItemComponent);
            const properties = Component.nodes[0].props;
            expect(properties.actions.fetchChannelItemData(itemId)).toEqual({
                type: 'FETCH_CHANNEL_ITEM_DATA',
                payload: itemId
            });
        });
    });
});
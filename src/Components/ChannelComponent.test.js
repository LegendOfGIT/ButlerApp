import React from 'react';
import ChannelComponent from './ChannelComponent';
import TestRenderer from 'react-test-renderer';

jest.mock(
    '../Containers/ChannelItemContainer',
    () =>
        { return () => <div>ChannelItemContainer</div>; }
);

describe('Channel Component', () => {
    it('renders without crashing', () => {
        expect(TestRenderer.create(
            <ChannelComponent/>
        ).toJSON()).toMatchSnapshot();
    });
});


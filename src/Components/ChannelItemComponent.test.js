import React from 'react';
import ChannelItemComponent from './ChannelItemComponent';
import TestRenderer from 'react-test-renderer';

describe('ChannelItem Component', () => {
    it('renders without crashing', () => {
        expect(TestRenderer.create(<ChannelItemComponent/>).toJSON()).toMatchSnapshot();
    });
});


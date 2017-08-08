import React from 'react';
import Channel from './ChannelComponent';
import TestRenderer from 'react-test-renderer';

describe('Channel Component', () => {
    it('renders without crashing', () => {
        expect(TestRenderer.create(<Channel/>).toJSON()).toMatchSnapshot();
    });
});


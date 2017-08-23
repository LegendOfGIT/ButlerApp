import React from 'react';
import ChannelItemComponent from './ChannelItemComponent';
import TestRenderer from 'react-test-renderer';

describe('ChannelItem Component', () => {
    it('renders without crashing', () => {
        expect(TestRenderer.create(<ChannelItemComponent/>).toJSON()).toMatchSnapshot();
    });

    it('renders information "title" when property is set', () => {
        const props = { title: 'The Simpsons in 10 Minuten auf Pro-Sieben' };
        expect(TestRenderer.create(<ChannelItemComponent {...props} />).toJSON()).toMatchSnapshot();
    });
});


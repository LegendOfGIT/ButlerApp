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

    it('calls fetchChannelData Action, when component is mount', () => {
        const spy = jest.spyOn(ChannelComponent.prototype, 'fetchChannelData');

        let component = TestRenderer.create(<ChannelComponent/>);
        component.componentDidMount();
        expect(spy).toBeCalled();
    });
});


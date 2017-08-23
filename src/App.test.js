import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

jest.mock(
    './Components/ChannelComponent',
    () => { return () => <div>ChannelComponent</div>; }
);

it('renders without crashing', () => {
    expect(TestRenderer.create(<App/>).toJSON()).toMatchSnapshot();
});

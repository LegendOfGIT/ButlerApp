import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
    expect(TestRenderer.create(<App/>).toJSON()).toMatchSnapshot();
});

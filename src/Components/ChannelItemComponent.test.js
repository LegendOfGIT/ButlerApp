import React from 'react';
import ChannelItemComponent from './ChannelItemComponent';
import TestRenderer from 'react-test-renderer';

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
});


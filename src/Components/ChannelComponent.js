import React from 'react';
import ChannelItemContainer from '../Containers/ChannelItemContainer';

const ChannelComponent = () => {
    return (
        <div className="Channel">
            <h2>Test-Stream</h2>
            <ChannelItemContainer id="AAA-BBB-CCC-DDD" />
            <ChannelItemContainer id="BBB-CCC-DDD-EEE" />
            <ChannelItemContainer id="CCC-DDD-EEE-FFF" />
        </div>
    );
};

export default ChannelComponent;

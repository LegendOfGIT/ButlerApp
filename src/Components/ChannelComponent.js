import React from 'react';
import PropTypes from 'prop-types';
import ChannelItemContainer from '../Containers/ChannelItemContainer';
import { fetchChannelData } from '../Actions/ChannelActions';

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

ChannelComponent.propTypes = {
    fetchChannelData: PropTypes.func,
};

export default ChannelComponent;

import React, { Component } from 'react';
import ChannelItem from './ChannelItemComponent';

const Channel = () => {
    return (
        <div className="Channel">
            <h2>Test-Stream</h2>
            <ChannelItem />
            <ChannelItem />
            <ChannelItem />
        </div>
    );
};

export default Channel;

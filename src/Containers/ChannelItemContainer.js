import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChannelItemComponent from '../Components/ChannelItemComponent';
import PropTypes from 'prop-types';

const mapDispatchToProps = () => {
    return {}
};

const mapStateToProps = (state, { id }) => {
    let channelItem =
        state.ChannelItems === undefined
        ? undefined
        : state.ChannelItems.find(
            (item) => { return item.id === id }
        );

    if (channelItem === undefined){
        channelItem = {
            description: '',
            header: '',
            title: ''
        };
    }

    return {
        description: channelItem.description,
        header: channelItem.header,
        title: channelItem.title
    }
};

const ChannelItemContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelItemComponent);

ChannelItemContainer.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    header: PropTypes.string,
    title: PropTypes.string
};

export default ChannelItemContainer;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChannelItemContainer from '../Containers/ChannelItemContainer';
import { fetchChannelData } from '../Actions/ChannelActions';
import PropTypes from 'prop-types';

class ChannelComponent extends Component {
    componentDidMount() {
        this.props.fetchChannelData();
    }

    render() {
        if (this.props.isLoading)
        {
            return (
                <div className="alert alert-info">
                    Loading channel...
                    <div className="fa fa-spin fa-spinner">&nbsp;</div>
                </div>
            );
        }

        if (this.props.hasError)
        {
            return (
                <div className="alert alert-danger">error while loading channel</div>
            );
        }

        return (
            <div className="Channel">
                <h2>{this.props.channelTitle}</h2>
                <ChannelItemContainer id="AAA-BBB-CCC-DDD" />
                <ChannelItemContainer id="BBB-CCC-DDD-EEE" />
                <ChannelItemContainer id="CCC-DDD-EEE-FFF" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        channelTitle: state.channel.title,
        hasError: state.channel.hasError,
        isLoading: state.channel.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChannelData: () => { dispatch(fetchChannelData(''));  }
    }
};

ChannelComponent.propTypes = {
    fetchChannelData: PropTypes.func,
    channelTitle: PropTypes.string,
    hasError: PropTypes.bool,
    isLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelComponent);

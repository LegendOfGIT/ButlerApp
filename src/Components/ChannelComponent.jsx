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
                <h2>{this.props.ChannelId}</h2>
                {
                    this.props.ChannelItemIds.map((channelItemId) => (
                        <ChannelItemContainer id={channelItemId} />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ChannelId: state.channel.ChannelId,
        ChannelItemIds: state.channel.InformationItemIds,
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
    ChannelId: PropTypes.string,
    ChannelItemIds: PropTypes.array,
    hasError: PropTypes.bool,
    isLoading: PropTypes.bool
};

ChannelComponent.defaultProps = {
    ChannelItemIds: []
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelComponent);

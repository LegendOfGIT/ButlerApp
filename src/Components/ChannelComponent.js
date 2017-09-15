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
            return (<div>Loading...</div>);
        }

        if (this.props.hasError)
        {
            return (<div>Error</div>);
        }

        return (
            <div className="Channel">
                <h2>Test-Stream</h2>
                <ChannelItemContainer id="AAA-BBB-CCC-DDD" />
                <ChannelItemContainer id="BBB-CCC-DDD-EEE" />
                <ChannelItemContainer id="CCC-DDD-EEE-FFF" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
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
    hasError: PropTypes.bool,
    isLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelComponent);

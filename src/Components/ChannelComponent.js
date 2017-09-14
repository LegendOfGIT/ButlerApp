import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChannelItemContainer from '../Containers/ChannelItemContainer';
import { fetchChannelData } from '../Actions/ChannelActions';

class ChannelComponent extends Component {
    componentDidMount() {
        this.props.fetchChannelData();
    }

    render() {
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChannelData: () => { dispatch(fetchChannelData(''));  }
    }
};

export default connect(null, mapDispatchToProps)(ChannelComponent);

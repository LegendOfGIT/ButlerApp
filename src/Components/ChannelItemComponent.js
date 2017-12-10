import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChannelItemData } from '../Actions/ChannelActions';
import _ from 'lodash';
import PropTypes from 'prop-types';

class ChannelItemComponent extends Component {
    componentDidMount(){
        this.props.fetchChannelItemData(this.props.id);
    }

    render() {
        let componentContent = [];

        //if (id) { componentContent.push(<div key={_.uniqueId()}>{id}</div>); }
        //if (title) { componentContent.push(<div key={_.uniqueId()}>{title}</div>); }
        //if (header) { componentContent.push(<div key={_.uniqueId()}>{header}</div>); }
        //if (description) { componentContent.push(<div key={_.uniqueId()}>{description}</div>); }

        return (
            <div className="ChannelItem">
                {componentContent}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChannelItemData: (id) => { dispatch(fetchChannelItemData(id));  }
    }
};

ChannelItemComponent.propTypes = {
    fetchChannelItemData: PropTypes.func,
    id: PropTypes.string
};

export default connect(mapDispatchToProps)(ChannelItemComponent);
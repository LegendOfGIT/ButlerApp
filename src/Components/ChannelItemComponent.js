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
        let headerContent = [];
        let bodyContent = [];

        if (this.props.header) { headerContent.push(<div key={_.uniqueId()}>{this.props.header}</div>); }
        if (this.props.title) { headerContent.push(<div key={_.uniqueId()}>{this.props.title}</div>); }

        if (this.props.mainImageUrl) {
            bodyContent.push(
                <img key={_.uniqueId()} src={this.props.mainImageUrl} width={250} alt={this.props.id}/>
            );
        }
        if (this.props.description) { bodyContent.push(<div key={_.uniqueId()}>{this.props.description}</div>); }

        return (
            <div className="ChannelItem">
                <div className="ChannelItemHeader">
                    {headerContent}
                </div>
                <div className="ChannelItemBody">
                    {bodyContent}
                </div>
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
    id: PropTypes.string,
    description: PropTypes.string,
    header: PropTypes.string,
    mainImageUrl: PropTypes.string,
    title: PropTypes.string
};

export default connect(null, mapDispatchToProps)(ChannelItemComponent);
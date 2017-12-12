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

        if (this.props.title) { componentContent.push(<div key={_.uniqueId()}>{this.props.title}</div>); }
        if (this.props.mainImageUrl) {
            componentContent.push(
                <img key={_.uniqueId()} src={this.props.mainImageUrl} width={250} alt={this.props.id}/>
            );
        }
        if (this.props.header) { componentContent.push(<div key={_.uniqueId()}>{this.props.header}</div>); }
        if (this.props.description) { componentContent.push(<div key={_.uniqueId()}>{this.props.description}</div>); }

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
    id: PropTypes.string,
    description: PropTypes.string,
    header: PropTypes.string,
    mainImageUrl: PropTypes.string,
    title: PropTypes.string
};

export default connect(null, mapDispatchToProps)(ChannelItemComponent);
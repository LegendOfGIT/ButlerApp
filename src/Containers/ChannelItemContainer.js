import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChannelItemComponent from '../Components/ChannelItemComponent';
import PropTypes from 'prop-types';
import * as channelActions from '../Actions/ChannelActions';

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(channelActions, dispatch)
    }
};

const mapStateToProps = (state, { id }) => {
    let channelItem =
        state.channelItems === undefined || state.channelItems[id] === undefined
        ? undefined
        : state.channelItems[id];

    channelItem = channelItem || {
        description: '',
        header: '',
        mainImageUrl: '',
        title: ''
    };

    return {
        id,
        description: channelItem.description,
        header: channelItem.header,
        mainImageUrl: channelItem.mainImageUrl,
        title: channelItem.title
    }
};

const ChannelItemContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelItemComponent);

ChannelItemContainer.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    header: PropTypes.string,
    mainImageUrl: PropTypes.string,
    title: PropTypes.string
};

export default ChannelItemContainer;
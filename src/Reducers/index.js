import { combineReducers } from 'redux';

import { channel } from './ChannelReducer';
import { channelItems } from './ChannelItemReducer';

export default combineReducers({
    channel,
    channelItems
});
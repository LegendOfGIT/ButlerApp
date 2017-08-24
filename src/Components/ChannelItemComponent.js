import React from 'react';
import _ from 'lodash';

const ChannelItemComponent = ({ title, header, description }) => {
    let componentContent = [];

    if (title) { componentContent.push(<div key={_.uniqueId()}>{title}</div>); }
    if (header) { componentContent.push(<div key={_.uniqueId()}>{header}</div>); }
    if (description) { componentContent.push(<div key={_.uniqueId()}>{description}</div>); }

    return (
        <div className="ChannelItem">
            {componentContent}
        </div>
    );
};

export default ChannelItemComponent;
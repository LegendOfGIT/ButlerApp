import React from 'react';

const ChannelItemComponent = ({ title }) => {
    let componentContent = [];

    if (title)
    {
        componentContent.push(<div>{title}</div>);
    }

    return (
        <div className="ChannelItem">
            {componentContent}
            <div>Information-Header</div>
            <div>Description</div>
        </div>
    );
};

export default ChannelItemComponent;
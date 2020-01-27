import React from 'react';

const SubReplyTemplate = ({input, subReply}) => {
    return (
        <div className ='SubReplyTemplate'>
            <div>{subReply}</div>
            <div>{input}</div>
        </div>
    )
}

export default SubReplyTemplate;
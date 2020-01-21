import React from 'react';

const ReplyContent = ({userName, content}) => {
    return (
        <div className = 'ReplyContent'>
            <span>{userName}</span>
            <span>{content}</span>
        </div>
    )
}

export default React.memo(ReplyContent);
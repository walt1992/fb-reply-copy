import React from 'react';
import TextButton from './TextButton';
const ReplyContent = ({userName, content}) => {
    return (
        <div className = 'ReplyContent'>
            <span className='user-name'><TextButton name ='username'></TextButton></span>
            <span className ='content'>{content}qwsdddddddddddddddddddddddddddddddddddddddddddddddddde</span>
        </div>
    )
}

export default React.memo(ReplyContent);
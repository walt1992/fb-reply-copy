import React from 'react';
import TextButton from './TextButton';
const ReplyContent = ({userName, content}) => {
    return (
        <div className = 'ReplyContent'>
            <span className='user-name'><TextButton name ={userName}></TextButton></span>
            <span className ='content'>{content}</span>
        </div>
    )
}

export default React.memo(ReplyContent);
import React from 'react';
import TextButton from './TextButton';
import LikeChip from './LikeChip';
const ReplyContent = ({userName, content, likeCnt}) => {

    return (
        <div className = 'ReplyContent'>
            <span className='user-name'><TextButton name ={userName} bold ={true}></TextButton></span>
            <span className ='content'>{content}</span>
            {likeCnt !== 0 && <LikeChip cnt ={likeCnt}/>}
        </div>
    )
}

export default React.memo(ReplyContent);
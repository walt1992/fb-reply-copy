import React from 'react';
import ReplyContent from './ReplyContent';
import TextButton from './TextButton';
import ProfileImage from './ProfileImage';
const Reply = ({reply}) => {
    console.log(reply)
    return (
        <div className = 'Reply'>
            <div className = 'img-wrap'><ProfileImage></ProfileImage></div>
            <div className = 'Reply-body'>
                <div>
                    <ReplyContent content ={reply.comment} userName = {reply.userName}></ReplyContent>
                </div>
                <div>
                    <TextButton name ='좋아요'></TextButton>
                    <TextButton name ='답글달기'></TextButton>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Reply);
import React from 'react';
import ReplyContent from './ReplyContent';
import TextButton from './TextButton';
import ProfileImage from './ProfileImage';
const Reply = ({reply, onSubInputOpen, onDelete, onLike}) => {
    console.log(reply)
    return (
        <div className = 'Reply'>
            <div className = 'img-wrap'><ProfileImage small ={reply.isSubReply}></ProfileImage></div>
            <div className = 'Reply-body'>
                <ReplyContent content ={reply.comment} userName = {reply.userName} likeCnt = {reply.likeCnt}></ReplyContent>
                <div>
                    <TextButton name ='좋아요' onClick ={onLike(reply.id)}></TextButton>
                    <TextButton name ='답글달기' onClick ={onSubInputOpen}></TextButton>
                    <TextButton name ='삭제' onClick ={onDelete(reply.id)}></TextButton>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Reply);
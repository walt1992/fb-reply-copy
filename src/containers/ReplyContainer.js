import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Reply from 'components/Reply';
import TextButton from 'components/TextButton';
import SubReplyTemplate from 'components/SubReplyTemplate';
import {openSubReply, openReplyInput, getReplies, deleteReply, likeReply} from 'modules/replies';
import ReplyInputContainer from 'containers/ReplyInputContainer';
import replyAPI from 'api/replyAPI';

const ReplyContainer = ({id}) => {
    const dispatch = useDispatch();
    const replies = useSelector(state => state.replies, {});
    const reply = replies[id];
    
    const onLike = (id) => () => {
        replyAPI.like(id);
        dispatch(likeReply(id));
    }

    const onDelete = (id) => () => {
        replyAPI.delete(id);
        dispatch(deleteReply(id));
    }

    const onSubReplyOpen = () => {
        dispatch(openSubReply(reply.id));
        const replies = replyAPI.get(reply.id);
        dispatch(getReplies(replies));
    }

    const onSubInputOpen = () => {
        dispatch(openReplyInput(reply.id));
    }

    const subReply = () => {
        const {subReplies, subReplyOpened} = reply;
        if (subReplies.length > 0) {
            if (subReplyOpened) {
                return subReplies.map( id => {
                    const sub = replies[id];
                    return <Reply key = {id} reply={sub} onSubInputOpen ={onSubInputOpen} onDelete={onDelete} onLike ={onLike}></Reply>;
                })
            } else {
                return <TextButton name ={`답글 ${subReplies.length}개 보기`} onClick ={onSubReplyOpen}></TextButton>
            }
        }
    }

    const input = reply.subInputOpened && <ReplyInputContainer parentId ={reply.id}/>;

    return (
        <div>
            <Reply reply={reply} onSubInputOpen ={onSubInputOpen} onDelete={onDelete} onLike ={onLike}></Reply>
            <SubReplyTemplate input ={input} subReply = {subReply()}/>
        </div>
    )
}

export default ReplyContainer;
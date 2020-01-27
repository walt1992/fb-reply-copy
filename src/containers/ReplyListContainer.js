import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getReplies, initRoot} from 'modules/replies';
import ReplyList from 'components/ReplyList';
import replyAPI from 'api/replyAPI';

const ReplyListContainer = () => {
    const dispatch = useDispatch();
    const replies = useSelector(state => state.replies, {});
    useEffect(() => {
        const root = replyAPI.init();
        dispatch(initRoot(root));
        const replies = replyAPI.get(-1);
        dispatch(getReplies(replies));
    },[dispatch]);
    return (
        <ReplyList ids={replies[-1]?.subReplies}></ReplyList>
    )
}

export default ReplyListContainer;
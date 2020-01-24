import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getReplies, initRoot} from 'modules/replies';
import ReplyList from 'components/ReplyList';

const ReplyListContainer = () => {
    const dispatch = useDispatch();
    const replies = useSelector(state => state.replies, {});
    useEffect(() => {
        dispatch(initRoot());
        dispatch(getReplies(-1));
    },[dispatch]);
    return (
        <ReplyList ids={replies[-1]?.subReplies}></ReplyList>
    )
}

export default ReplyListContainer;
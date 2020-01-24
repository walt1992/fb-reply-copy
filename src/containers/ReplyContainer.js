import React from 'react';
import {useSelector} from 'react-redux';
import Reply from 'components/Reply';
const ReplyContainer = ({id}) => {

    const replies = useSelector(state => state.replies, {});
    const reply = replies[id];

    return (
        <Reply reply={reply}></Reply>
    )
}

export default ReplyContainer;
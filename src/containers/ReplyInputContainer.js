import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReplyInput from 'components/ReplyInput';
import ProfileImage from 'components/ProfileImage';
import {changeInput} from 'modules/reply';
import {addReply} from 'modules/replies';
import replyAPI from 'api/replyAPI';

const ReplyInputContainer = ({parentId = -1}) => {
    const dispatch = useDispatch();
    const {reply} = useSelector(state => state.reply);

    const onChange = (ev) => {
        dispatch(changeInput(ev.target.value));
    }

    const onKeyDown = (ev) => {
        const {key} = ev;
        if (key === 'Enter') {
            const replyObj = {
                id : `reply_${new Date().getTime()}`, 
                parentId : parentId,
                isSubReply : parentId === -1 ? false : true,
                userName : 'UserName',
                comment : ev.target.value,
                likeCnt : 0,
                subReplies : [],
                subReplyOpened : false,
                subInputOpened : false,
                createdAt : new Date(),
            };
        
            replyAPI.add(replyObj);
            dispatch(addReply(replyObj));
            ev.target.value = '';
            dispatch(changeInput(''));
        }
    }

    return (
        <div className ='ReplyInputContainer'>
            <ProfileImage small ={parentId !== -1}></ProfileImage>
            <ReplyInput onChange ={onChange} onKeyDown ={onKeyDown} value ={reply}></ReplyInput>
        </div>
    )
}

export default ReplyInputContainer;
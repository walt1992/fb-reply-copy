import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReplyInput from 'components/ReplyInput';
import ProfileImage from 'components/ProfileImage';
import {changeInput} from 'modules/reply';
import {addReply} from 'modules/replies';
const ReplyInputContainer = ({parentId = -1}) => {
    const dispatch = useDispatch();
    const {reply} = useSelector(state => state.reply);

    const onChange = (ev) => {
        dispatch(changeInput(ev.target.value));
    }

    const onKeyDown = (ev) => {
        const {key} = ev;
        if (key === 'Enter') {
            dispatch(addReply(ev.target.value, parentId));
            ev.target.value = '';
            dispatch(changeInput(''));
        }
    }

    return (
        <div className ='ReplyInputContainer'>
            <ProfileImage></ProfileImage>
            <ReplyInput onChange ={onChange} onKeyDown ={onKeyDown} value ={reply}></ReplyInput>
        </div>
    )
}

export default ReplyInputContainer;
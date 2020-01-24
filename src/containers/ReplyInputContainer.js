import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReplyInput from 'components/ReplyInput';
import ProfilImage from 'components/ProfileImage';
import {changeInput} from 'modules/reply';
import {addReply, getReplies} from 'modules/replies';
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
        <>
            <ProfilImage></ProfilImage>
            <ReplyInput onChange ={onChange} onKeyDown ={onKeyDown} value ={reply}></ReplyInput>
        </>
    )
}

export default ReplyInputContainer;
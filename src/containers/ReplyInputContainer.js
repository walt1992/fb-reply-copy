import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReplyInput from 'components/ReplyInput';
import ProfilImage from 'components/ProfileImage';
import {changeInput} from 'modules/reply';
const ReplyInputContainer = ({parentId = -1}) => {
    const dispatch = useDispatch();
    const {reply} = useSelector(state => state.reply);

    const onChange = (ev) => {
        dispatch(changeInput(ev.target.value));
    }

    const onKeyDown = (ev) => {
        const {key} = ev;
        if (key === 'Enter') {
            console.log('apply')
        } else {

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
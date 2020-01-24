import React from 'react';
import IconButton from './IconButton';
import {FiSmile,FiCamera, FiSpeaker, FiFile} from 'react-icons/fi';

const ReplyInput = ({value, onChange, onKeyDown}) => {
    const smileIcon = <FiSmile></FiSmile>;
    const cameraIcon = <FiCamera></FiCamera>;
    const speakerIcon = <FiSpeaker></FiSpeaker>;
    const fileIcon = <FiFile></FiFile>;
    return (
        <div className = 'ReplyInput'>
            <input type ='text' value ={value} onChange ={onChange} onKeyDown={onKeyDown} placeholder ='댓글을 입력하세요.'/>
            <div className ='icons'>
                <IconButton icon ={smileIcon}></IconButton>
                <IconButton icon = {cameraIcon}></IconButton>
                <IconButton icon = {speakerIcon}></IconButton>
                <IconButton icon = {fileIcon}></IconButton>
            </div>
        </div>
    )
}

export default React.memo(ReplyInput);
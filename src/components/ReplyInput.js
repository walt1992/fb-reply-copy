import React from 'react';
import IconButton from './IconButton';
const ReplyInput = ({value, onChange, onKeyDown}) => {
    return (
        <div className = 'ReplyInput'>
            <input type ='text' value ={value} onChange ={onChange} onKeyDown={onKeyDown} placeholder ='댓글을 입력하세요.'/>
            <div className ='icons'>
                <IconButton></IconButton>
                <IconButton></IconButton>
                <IconButton></IconButton>
                <IconButton></IconButton>
            </div>
        </div>
    )
}

export default React.memo(ReplyInput);
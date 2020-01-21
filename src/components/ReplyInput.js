import React from 'react';
import IconButton from './IconButton';
const ReplyInput = ({value, onChange}) => {
    return (
        <div className = 'ReplyInput'>
            <input type ='text' value ={value} onChange ={onChange} placeHolder ='댓글을 입력하세요.'/>
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
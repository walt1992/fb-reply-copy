import React from 'react';
import ReplyContainer from '../containers/ReplyContainer';
import ReplyInputContainer from '../containers/ReplyInputContainer';
const ReplyList = () => {
    return (
        <div className = 'ReplyList'>
            <div className = 'body'>
                <div><ReplyContainer></ReplyContainer></div>
            </div>
            <div className ='footer'>
                <ReplyInputContainer></ReplyInputContainer>
            </div>
        </div>
    )
}

export default ReplyList;
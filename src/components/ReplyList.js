import React from 'react';
import ReplyContainer from '../containers/ReplyContainer';
import ReplyInputContainer from '../containers/ReplyInputContainer';
const ReplyList = ({ids}) => {

    const list = ids?.map(id => {
        return <ReplyContainer key ={id} id ={id}></ReplyContainer>;
    })

    return (
        <div className = 'ReplyList'>
            <div className = 'ReplyList-body'>
                <div>{list}</div>
            </div>
            <div className ='ReplyList-footer'>
                <ReplyInputContainer></ReplyInputContainer>
            </div>
        </div>
    )
}

export default ReplyList;
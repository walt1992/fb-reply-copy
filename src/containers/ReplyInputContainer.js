import React from 'react';
import ReplyInput from '../components/ReplyInput';
import ProfilImage from '../components/ProfileImage';

const ReplyInputContainer = () => {

    const onType = (ev) => {
        const {key} = ev;
        if (key === 'Enter') {

        } else {
            
        }
    }
    return (
        <>
            <ProfilImage></ProfilImage>
            <ReplyInput></ReplyInput>
        </>
    )
}

export default ReplyInputContainer;
import React from 'react';

const ProfileImage = ({src, userName}) => {
    return (
        <img className = 'ProfileImage' src = '/siba.jpg' alt= {userName}/>
    )
}

export default React.memo(ProfileImage);
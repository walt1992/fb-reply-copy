import React from 'react';

const ProfileImage = ({src, userName}) => {
    return (
        <div className = 'ProfileImage'><img src = '/public/logo192.png' alt= {userName}/></div>
    )
}

export default React.memo(ProfileImage);
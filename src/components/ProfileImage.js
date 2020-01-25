import React from 'react';
import classnNames from 'classnames';
const ProfileImage = ({src, userName, small}) => {
    return (
        <img className = {classnNames('ProfileImage', {small})} src = '/siba.jpg' alt= {userName}/>
    )
}

export default React.memo(ProfileImage);
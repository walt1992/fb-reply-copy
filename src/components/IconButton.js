import React from 'react';

const IconButton = ({icon, onClick}) => {
    return (
        <span className = 'IconButton' onClick ={onClick}>{icon}</span>
    )
}

export default React.memo(IconButton);
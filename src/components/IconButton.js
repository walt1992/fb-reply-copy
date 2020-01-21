import React from 'react';

const IconButton = ({icon, onClick}) => {
    return (
        <span className = 'IconButton' onClick ={onClick}><i>o</i></span>
    )
}

export default React.memo(IconButton);
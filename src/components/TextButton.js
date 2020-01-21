import React from 'react';

const TextButton = ({onClick, name}) => {
    return <span onClick ={onClick}>{name}</span>
}

export default React.memo(TextButton);
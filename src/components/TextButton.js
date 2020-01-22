import React from 'react';

const TextButton = ({onClick, name}) => {
    return <a className ='TextButton' href ='#' onClick={onClick}>{name}</a>
}

export default React.memo(TextButton);
import React from 'react';
import classNames from 'classnames';
const TextButton = ({onClick, name, bold}) => {
    return <a className ={classNames('TextButton',{bold})} href ='#' onClick={onClick}>{name}</a>
}

export default React.memo(TextButton);
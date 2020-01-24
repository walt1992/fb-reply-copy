import React from 'react';

const LikeChip = ({cnt}) => {
    return <span className ='LikeChip'><i/>{cnt}</span>
}

export default React.memo(LikeChip);
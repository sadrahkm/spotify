import React from 'react';

const Like = ({...rest}) => {

    return (
        <>
            <button {...rest}>
                <i className="far fa-heart"></i>
            </button>
        </>
    );
};

export default Like;

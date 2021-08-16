import React from 'react';

const ThreeDots = ({className = ''}) => {

    return (
        <>
            <i className={`fas fa-ellipsis-h text-light-400 ${className}`}></i>
        </>
    );
};

export default ThreeDots;

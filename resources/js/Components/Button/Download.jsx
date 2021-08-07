import React from 'react';

const Download = ({...rest}) => {

    return (
        <>
            <button {...rest}>
                <i className="far fa-arrow-alt-circle-down"></i>
            </button>
        </>
    );
};

export default Download;

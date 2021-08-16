import React from 'react';

const Facebook = ({...rest}) => {

    return (
        <>
            <img
                src="/icons/facebook.svg"
                alt=""
                {...rest}
            />
        </>
    );
};

export default Facebook;

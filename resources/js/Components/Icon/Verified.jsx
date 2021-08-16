import React from 'react';

const Verified = ({...rest}) => {

    return (
        <>
            <img
                src="/icons/verified.svg"
                alt=""
                {...rest}
            />
        </>
    );
};

export default Verified;

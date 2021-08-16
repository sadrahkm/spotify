import React from 'react';

const Google = ({...rest}) => {
    return (
        <>
            <img
                src="/icons/google.svg"
                alt=""
                {...rest}
            />
        </>
    );
};

export default Google;

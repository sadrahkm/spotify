import React from 'react';

const Follow = ({children}) => {

    return (
        <>
            <button className="border border-opacity-50 font-bold hover:border-opacity-100 px-5 py-1 rounded-md text-white">
                {children}
            </button>
        </>
    );
};

export default Follow;

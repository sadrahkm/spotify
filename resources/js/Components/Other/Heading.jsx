import React from 'react';

const Heading = ({heading, hasSeeAll = false}) => {

    return (
        <>
            <div className="flex justify-between text-white mb-4 items-center">
                <h2 className="text-3xl font-extrabold">{heading}</h2>
                {hasSeeAll ? <p className="text-sm font-semibold opacity-70">SEE ALL</p> : ""}
            </div>
        </>
    );
};

export default Heading;

import React from 'react';

const WideButton = ({children, className = "", transparent, icon, ...rest}) => {

    return (
        <>
            <button className={`${icon ? "flex items-center" : ""} justify-center font-bold hover:scale-105 my-2 py-2.5 rounded-full transform w-full relative ${className}`} {...rest}>
                {icon ? (
                    <div className="w-6 absolute left-4">
                        {icon}
                    </div>
                ) : ""}
                <p>
                    {children}
                </p>
            </button>
        </>
    );
};

export default WideButton;

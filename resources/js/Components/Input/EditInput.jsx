import React from 'react';

const EditInput = ({label, id, type = "text"}) => {

    return (
        <>
            <div className="flex flex-col font-bold mb-6">
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    type={type}
                    className="w-full"
                />
            </div>
        </>
    );
};

export default EditInput;

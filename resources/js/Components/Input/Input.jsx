import React from 'react';

export default function Input({
                                  type = 'text',
                                  className,
                                  onChange,
                                  ...rest
                              }) {

    function handleChange(event) {
        onChange(event);
    }

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                className={`bg-darkgray-200 placeholder-darkgray-100 text-white border-0 focus:outline-none ${className}`}
                onChange={handleChange}
                {...rest}
            />
        </div>
    );
}

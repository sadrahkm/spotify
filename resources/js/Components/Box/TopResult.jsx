import React from 'react';

const TopResult = ({title, alt, src, artist = "", type}) => {

    return (
        <div
            className="bg-darkgray-400 p-5 rounded-md">
            <div className="flex flex-col">
                <img
                    className={`rounded-sm shadow-lg w-24 ${type === "artist" ? "rounded-full" : ""}`}
                    src={src}
                    alt={alt}/>
                <h5 className="font-extrabold mb-2 mt-3 text-3xl text-white">{title}</h5>
                <div>
                    {type !== "artist" ? <span>{artist}</span> : ""}
                    <span className="bg-black font-bold px-3 py-0.5 rounded-full text-sm text-white">{type.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
};

export default TopResult;

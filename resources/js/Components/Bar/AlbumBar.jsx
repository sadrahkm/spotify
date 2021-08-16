import React from 'react';
import AlbumBox from "@/Components/Box/AlbumBox";

const AlbumBar = ({heading, data, isUser}) => {

    return (
        <>
            <div className="flex justify-between text-white mb-4 items-center">
                <h2 className="text-xl font-bold">{heading}</h2>
                <p className="text-sm font-semibold opacity-70">SEE ALL</p>
            </div>
            <div className="gap-x-5 grid grid-cols-5">
                {data.map(({id, title, name, cover}) => (
                    <AlbumBox
                        isUser={isUser}
                        id={id}
                        title={title}
                        name={name}
                        src={cover}/>
                ))}
            </div>
        </>
    );
};

export default AlbumBar;

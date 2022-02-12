import React from 'react';
import AlbumBox from "@/Components/Box/AlbumBox";
import Heading from "@/Components/Other/Heading";

const AlbumBar = ({heading, data, isUser}) => {

    return (
        <>
            <Heading
                heading={heading}
                hasSeeAll/>
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

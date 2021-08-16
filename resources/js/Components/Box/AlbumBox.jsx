import React from 'react';
import {Link} from '@inertiajs/inertia-react';

const AlbumBox = ({id, title, name, src, isUser}) => {
    return (
        <Link href={route("album.show", {album: id})}>
            <div className="bg-darkgray-600 bg-opacity-20 border border-darkgray-600 h-64 hover:bg-opacity-100 pt-4 rounded-md shadow-md transition-all">
                <div className="flex flex-col px-4 text-white">
                    <div>
                        <img
                            className={`mb-4 shadow-lg rounded-lg w-full ${isUser ? "rounded-full" : ""}`}
                            src={src}
                            alt={title}/>
                    </div>
                    <div>
                        <h4 className="font-bold truncate">{title}</h4>
                        <p className="text-sm line-clamp-2">{name}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AlbumBox;

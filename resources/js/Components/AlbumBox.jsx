import React from 'react';
import {Link} from '@inertiajs/inertia-react';

const AlbumBox = ({id, title, userName, src}) => {
    return (
        <Link href={`/album/${id}`}>
            <div className="bg-darkgray-600 bg-opacity-20 border border-darkgray-600 h-64 hover:bg-opacity-100 pt-4 rounded-md shadow-md transition-all">
                <div className="flex flex-col px-4 text-white">
                    <div>
                        <img
                            className="mb-4 rounded-lg w-full"
                            src={src}
                            alt={title}/>
                    </div>
                    <div className="w-36">
                        <h4 className="font-bold truncate">{title}</h4>
                        <p className="text-sm line-clamp-2">{userName}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AlbumBox;

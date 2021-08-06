import React from 'react';
import {Link} from '@inertiajs/inertia-react';

const AlbumBox = () => {
    return (
        <Link href="/album/2">
            <div className="bg-darkgray-600 bg-opacity-20 hover:bg-opacity-100 transition-all border border-darkgray-600 flex justify-center pb-8 pt-4 rounded-md shadow-md">
                <div className="flex flex-col items-center px-4 text-white">
                    <div>
                        <img
                            className="mb-4 rounded-lg w-full"
                            src="/images/cover.jpg"
                            alt=""/>
                    </div>
                    <div>
                        <h4 className="font-bold">All Ears English Podcast</h4>
                        <p className="text-sm">All Ears English</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AlbumBox;

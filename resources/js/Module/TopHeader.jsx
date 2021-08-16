import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

const TopHeader = () => {

    return (
        <div className="flex items-center justify-end mr-10 mt-3 space-x-4 absolute right-0">
            <div>
                <InertiaLink
                    href={route('logout')}
                    method="POST">
                    <button
                        className="bg-black border border-light-400 font-bold px-7 py-1 rounded-full text-light-400"
                        type="submit">
                        Logout
                    </button>
                </InertiaLink>
            </div>
            <div className="bg-black flex font-bold items-center pl-1 pr-6 py-1 rounded-full space-x-3">
                <img
                    className="rounded-full w-8"
                    src="images/cover.jpg"
                    alt=""/>
                <h2 className="text-light-400 text-sm">Sadra Hakim</h2>
            </div>
        </div>
    );
};

export default TopHeader;

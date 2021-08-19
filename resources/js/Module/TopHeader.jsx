import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";
import SearchInput from "@/Components/Input/SearchInput";

const TopHeader = ({hasSearch}) => {

    return (
        <div className="absolute w-full">
            <div className="flex justify-end mt-3 mx-10 space-x-4">
                {/*<div>*/}
                {/*    <SearchInput/>*/}
                {/*</div>*/}
                <div className="flex items-center">
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
            </div>
        </div>
    )
        ;
};

export default TopHeader;

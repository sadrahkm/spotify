import React from 'react';
import {InertiaLink, Link} from "@inertiajs/inertia-react";
import SearchInput from "@/Components/Input/SearchInput";
import AvatarPic from "@/Components/AvatarPic";

const TopHeader = ({hasSearch}) => {

    return (
        <div className="absolute top-3 right-10">
            <div className="flex justify-end space-x-4">
                {/*<div>*/}
                {/*    <SearchInput/>*/}
                {/*</div>*/}
                <div className="flex items-center">
                    <div>
                        <InertiaLink
                            href={route('logout')}
                            method="POST">
                            <button
                                className="bg-black border border-light-400 font-bold px-7 py-1 rounded-full text-light-400 mr-3"
                                type="submit">
                                Logout
                            </button>
                        </InertiaLink>
                    </div>

                    <Link href="/account/overview">
                        <div className="bg-black flex font-bold items-center pl-1 pr-6 py-1 rounded-full space-x-3">
                            <AvatarPic src="/images/cover.jpg"/>
                            <h2 className="text-light-400 text-sm">Sadra Hakim</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
        ;
};

export default TopHeader;

import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";
import Follow from "@/Components/Button/Follow";
import ThreeDots from "@/Components/Icon/ThreeDots";
import AlbumBar from "@/Components/Bar/AlbumBar";
import Layout from "@/Layouts/Layout";
import Verified from "@/Components/Icon/Verified";
import AlbumRecord from "@/Components/Record/AlbumRecord";
import GreenPlayButton from "@/Components/Button/GreenPlayButton";

const Index = () => {
    return (
        <div className="h-0">
            <div className="bg-gradient-to-b flex from-darkgray-300 h-72 pb-6 px-8 to-darkgray-500">
                <div className="flex items-end text-white">
                    <div className="flex flex-col">
                        <span className="flex font-bold space-x-2 text-xs uppercase">
                            <div className="w-4">
                                <Verified/>
                            </div>
                            <p>Verified Artist</p>
                        </span>
                        <h2 className="font-extrabold text-6xl ml-0.5 my-3">Selena Gomez</h2>
                        <div className="text-sm text-darkgray-100 space-y-1">
                            <p className="flex space-x-1">
                                <span>34,907,285 monthly listeners</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-8">
                {/* Top Nav */}
                <div className="mt-6 mb-6 ml-2">
                    <div className="flex space-x-7 items-center">
                        <GreenPlayButton/>
                        <Follow>
                            Follow
                        </Follow>
                        <ThreeDots className="text-2xl"/>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl text-white font-bold mb-4">Popular</h2>
                    <AlbumRecord
                        hasCover
                        title="Test"
                        plays="12"
                        time="12:22"
                        index="1"
                    />
                    <AlbumRecord
                        hasCover
                        title="Test"
                        plays="12"
                        time="12:22"
                        index="2"
                    />
                    <AlbumRecord
                        hasCover
                        title="Test"
                        plays="12"
                        time="12:22"
                        index="3"
                    />
                    <AlbumRecord
                        hasCover
                        title="Test"
                        plays="12"
                        time="12:22"
                        index="4"
                    />
                </div>
            </div>
        </div>
    );
};

Index.layout = page => <Layout children={page}/>

export default Index;

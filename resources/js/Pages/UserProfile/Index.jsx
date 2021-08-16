import React from 'react';
import Layout from "@/Layouts/Layout";
import AlbumRecord from "@/Components/Record/AlbumRecord";
import {InertiaLink, Link, usePage} from "@inertiajs/inertia-react";
import Download from "@/Components/Button/Download";
import Like from "@/Components/Button/Like";
import AlbumDropdown from "@/Components/Dropdown/AlbumDropdown";
import ThreeDots from "@/Components/Icon/ThreeDots";
import Follow from "@/Components/Button/Follow";
import AlbumBar from "@/Components/Bar/AlbumBar";

const Index = () => {
    return (
        <div className="h-0">
            <div className="bg-gradient-to-b flex from-darkgray-300 h-72 pb-6 px-8 to-darkgray-500">
                <div className="flex text-white items-end">
                    <img
                        className="h-52 bg-gradient-to-b from-darkgray-300 mr-6 shadow-xl rounded-full"
                        src="/images/cover.jpg"
                        alt=""/>
                    <div className="flex flex-col">
                        <span className="font-bold text-xs uppercase">profile</span>
                        <h2 className="font-extrabold text-6xl ml-0.5 my-3">Sadra Hakim</h2>
                        <div className="text-sm text-darkgray-100 space-y-1">
                            <p className="flex space-x-1">
                                <span>8 Public Playlists</span>
                                <span>•</span>
                                <InertiaLink href="#">
                                    <span className="text-white hover:underline">1 Follower</span>
                                </InertiaLink>
                                <span>•</span>
                                <InertiaLink href="#">
                                    <span className="text-white hover:underline">7 Following</span>
                                </InertiaLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-8">
                {/* Top Nav */}
                <div className="mt-6 mb-6 ml-2">
                    <div className="flex space-x-7 items-center">
                        <Follow>
                            Follow
                        </Follow>
                        <ThreeDots className="text-2xl"/>
                    </div>
                </div>
                <div className="mt-10">
                    <AlbumBar
                        isUser
                        heading="Public Playlists"
                        data={[
                            {
                                id: 1,
                                title: "Aref",
                                name: "Profile",
                                cover: "https://i.pravatar.cc/300?u=3"
                            }
                        ]}/>
                </div>
                <div className="mt-10">
                    <AlbumBar
                        heading="Followers"
                        data={[
                            {
                                id: 1,
                                title: "Sad Tracks",
                                cover: "https://i.pravatar.cc/300?u=2"
                            }
                        ]}/>
                </div>
                <div className="mt-10">
                    <AlbumBar
                        isUser
                        heading="Following"
                        data={[
                            {
                                id: 1,
                                title: "Select Gomez",
                                name: "Profile",
                                cover: "https://i.pravatar.cc/300?u=1"
                            }
                        ]}/>
                </div>
            </div>
        </div>
    );
};

Index.layout = page => <Layout children={page}/>

export default Index;

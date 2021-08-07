import React from 'react';
import Layout from "@/Layouts/Layout";
import PlaylistItem from "@/Components/PlaylistItem";
import {Link, usePage} from "@inertiajs/inertia-react";
import Download from "@/Components/Button/Download";
import Like from "@/Components/Button/Like";
import AlbumDropdown from "@/Components/Dropdown/AlbumDropdown";

const Show = () => {
    const {album: {data: album},} = usePage().props;
    const user = album.user;
    const musics = album.musics;

    return (
        <div className="h-0">
            <div className="px-8 pt-16 pb-6 bg-gradient-to-b from-darkgray-300 to-darkgray-500">
                <div className="flex text-white items-end">
                    <img
                        className="h-52 bg-gradient-to-b from-darkgray-300 mr-6 shadow-xl"
                        src="/images/cover.jpg"
                        alt=""/>
                    <div>
                        <span className="font-bold text-xs uppercase">album</span>
                        <h2 className="font-extrabold text-6xl ml-0.5 my-3">{album.title}</h2>
                        <div className="text-sm text-darkgray-100 space-y-1">
                            {/*<p>MEDUZA, David Guetta, Disclosure and more</p>*/}
                            <p className="flex">
                                {/*Made for */}
                                <span>
                                    <img
                                        width="20"
                                        height="20"
                                        className="rounded-full mr-2"
                                        src={user.profile_picture}
                                        alt=""/>
                                </span>
                                <Link href={route('users.show', {username: user.username})}>
                                    <span className="font-bold text-white mr-1">{user.name}</span>
                                </Link>
                                <span>| 2021 | 50 songs, 2 hr 45</span>
                                min</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-8">
                {/* Top Nav */}
                <div className="mt-6 mb-12">
                    <div className="flex justify-between">
                        <div className="flex space-x-7 items-center">
                            <button className="bg-primary-lightgreen px-4 py-3 rounded-full text-white">
                                <i className="fas fa-play"></i>
                            </button>
                            <div className="flex space-x-7 text-2xl text-darkgray-100">
                                <Like/>
                                <Download/>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-6">
                                <form
                                    action=""
                                    className="bg-opacity-10 bg-white border-none rounded-md text-darkgray-100">
                                    <button
                                        type="submit"
                                        className="pl-4 pr-2">
                                        <i className="fas fa-search"></i>
                                    </button>
                                    <input
                                        className="bg-transparent border-none h-9"
                                        type="text"
                                        placeholder="Search in playlist"
                                        name="search"/>
                                </form>
                            </div>
                            <AlbumDropdown/>
                        </div>
                    </div>
                </div>
                {/* Table */}
                <div>
                    <div>
                        <div className="border-b border-opacity-20 grid grid-cols-9 pb-2 text-darkgray-100 mb-3">
                            <div className="col-span-5 pl-8"><span className="mr-3">#</span> TITLE</div>
                            <div className="col-span-3">ALBUM</div>
                            <div className="col-span-1"><i className="far fa-clock"></i></div>
                        </div>
                        {musics.map(({title, plays, path}) => (
                            <PlaylistItem
                                title={title}
                                plays={plays}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

Show.layout = page => <Layout children={page}/>

export default Show;

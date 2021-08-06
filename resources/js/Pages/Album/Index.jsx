import React from 'react';
import Layout from "@/Layouts/Layout";
import PlaylistItem from "@/Components/PlaylistItem";

const Index = () => {

    return (
        <div className="h-0">
            <div className="px-8 pt-16 pb-6 bg-gradient-to-b from-darkgray-300 to-darkgray-500">
                <div className="flex text-white items-end">
                    <img
                        className="h-52 bg-gradient-to-b from-darkgray-300 mr-6 shadow-xl"
                        src="/images/cover.jpg"
                        alt=""/>
                    <div>
                        <span className="font-bold text-xs uppercase">playlist</span>
                        <h2 className="font-extrabold text-6xl ml-0.5 my-3">Daily Mix 3</h2>
                        <div className="text-sm text-darkgray-100 space-y-1">
                            <p>MEDUZA, David Guetta, Disclosure and more</p>
                            <p>Made for <span className="font-bold text-white">Sadra Hakim</span> | 50 songs, 2 hr 45
                                min</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-8">
                <div className="mt-6 mb-12">
                    <div className="flex justify-between">
                        <div className="flex space-x-7 items-center">
                            <button className="bg-primary-lightgreen px-4 py-3 rounded-full text-white">
                                <i className="fas fa-play"></i>
                            </button>
                            <div className="flex space-x-7 text-2xl text-darkgray-100">
                                <div className="cursor-pointer">
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="cursor-pointer">
                                    <i className="far fa-arrow-alt-circle-down"></i>
                                </div>
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
                            <div>
                                <button className="text-darkgray-100">
                                    Custom order
                                    <i className="fas fa-chevron-down ml-4"></i>
                                </button>

                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="border-b border-opacity-20 grid grid-cols-9 pb-2 text-darkgray-100 mb-3">
                            <div className="col-span-5 pl-8"><span className="mr-3">#</span> TITLE</div>
                            <div className="col-span-3">ALBUM</div>
                            <div className="col-span-1"><i className="far fa-clock"></i></div>
                        </div>
                        <PlaylistItem/>
                        <PlaylistItem/>
                        <PlaylistItem/>
                        <PlaylistItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Index.layout = page => <Layout children={page}/>

export default Index;

import React from 'react';
import Footer from '@/Shared/Footer';

const Index = () => {

    return (
        <div>
            <div className="h-screen">
                <div className="h-5/6">
                    <div className="grid grid-cols-10 h-full">
                        <div className="bg-black col-span-2 h-full pt-6">
                            <div className="px-8">
                                <div className="pb-6 border-b border-white border-opacity-20">
                                    <div className="flex flex-col">
                                        <nav className="opacity-70 space-y-3 text-lg text-white">
                                            <div className="flex items-center">
                                                <i className="fas fa-home"></i>
                                                <p className="ml-3.5">Home</p>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-search"></i>
                                                <p className="ml-3.5">Search</p>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-bookmark"></i>
                                                <p className="ml-3.5">Your Library</p>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="mt-10 text-white space-y-3">
                                        <div className="flex items-center opacity-70">
                                            <div className="bg-white ml-0.5 px-2 py-0.5 rounded-sm">
                                                <i className="fa-plus fas text-sm text-black"></i>
                                            </div>
                                            <p className="ml-3.5">Create Playlist</p>
                                        </div>
                                        <div className="flex items-center opacity-70">
                                            <div className="bg-gradient-to-br from-purple-light px-2 py-1 rounded-sm to-white">
                                                <i className="fas fa-heart text-sm text-white"></i>
                                            </div>
                                            <p className="ml-3.5">Liked Songs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white text-opacity-70 pl-8 max-h-56 overflow-y-scroll">
                                <ul className="py-3 space-y-1.5">
                                    <li>Music</li>
                                    <li>Dance</li>
                                    <li>Dance</li>
                                    <li>Dance</li>
                                    <li>Dance</li>
                                    <li>Dance</li>
                                    <li>Dance</li>
                                    <li>Dance</li>
                                    <li>Party</li>
                                    <li>Party</li>
                                    <li>Party</li>
                                    <li>Party</li>
                                    <li>Party</li>
                                    <li>Discover Weekly</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-8 bg-darkgray-800 h-full px-8 py-16 overflow-y-scroll">
                            <div>
                                <div>
                                    <h2 className="text-white text-3xl mb-8 font-bold">Good Afternoon</h2>
                                    <div className="font-bold gap-x-6 gap-y-4 grid grid-cols-3 text-white">
                                        <div className="bg-opacity-10 bg-white flex h-20 items-center rounded-sm">
                                            <img
                                                className="h-full mr-4 rounded-sm"
                                                src="/images/cover.jpg"
                                                alt=""/>
                                            Summer Hits
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <div className="flex justify-between text-white mb-4 items-center">
                                        <h2 className="text-xl font-bold">Your Top Shows</h2>
                                        <p className="text-sm font-semibold opacity-70">SEE ALL</p>
                                    </div>
                                    <div className="gap-x-5 grid grid-cols-5">
                                        <div className="bg-darkgray-600 bg-opacity-20 border border-darkgray-600 flex justify-center pb-8 pt-4 rounded-md shadow-md">
                                            <div className="flex flex-col items-center px-4 text-white">
                                                <img
                                                    className="mb-4 rounded-lg w-full"
                                                    src="/images/cover.jpg"
                                                    alt=""/>
                                                <div>
                                                    <h4 className="font-bold">All Ears English Podcast</h4>
                                                    <p className="text-sm">All Ears English</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Index;

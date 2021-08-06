import React from 'react';
import Footer from "@/Shared/Footer";
import {Link} from "@inertiajs/inertia-react";

const Layout = ({children}) => {

    return (
        <div>
            <div className="flex flex-col h-screen">
                <div className="flex-grow">
                    <div className="flex h-full">
                        <div className="bg-black flex-grow-0 h-full pt-6">
                            <div className="w-72">
                                <div className="px-8">
                                    <div className="pb-6 border-b border-white border-opacity-20">
                                        <div className="flex flex-col">
                                            <nav className="opacity-70 space-y-3 text-lg text-white">
                                                <Link href={route('home')}>
                                                    <div className="flex items-center">
                                                        <i className="fas fa-home"></i>
                                                        <p className="ml-3.5">Home</p>
                                                    </div>
                                                </Link>
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
                        </div>
                        <div className="bg-darkgray-800 flex-grow h-full overflow-y-scroll">
                            {children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;

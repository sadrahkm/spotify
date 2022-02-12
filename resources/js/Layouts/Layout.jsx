import React from 'react';
import Footer from "@/Module/Footer";
import {Link} from "@inertiajs/inertia-react";
import TopHeader from "@/Module/TopHeader";

const Layout = ({children}) => {

    return (
        <div>
            <div className="flex flex-col h-screen">
                <div className="flex-grow">
                    <div className="flex h-full">
                        <div className="bg-darkgray-900 flex-grow-0 h-full pt-6">
                            <div className="w-72">
                                <div className="px-4">
                                    <div>
                                        <div className="flex flex-col">
                                            <nav className="space-y-1 text-lg text-white">
                                                <Link href={route('home')}>
                                                    <div className="bg-opacity-10 bg-white flex hover:text-white items-center px-4 py-1 rounded-sm text-white">
                                                        <i className="fas fa-home"></i>
                                                        <p className="ml-3.5">Home</p>
                                                    </div>
                                                </Link>
                                                <Link href={route('search.show')}>
                                                    <div className="text-light-400 bg-opacity-1 flex hover:text-white items-center px-4 py-1 rounded-sm text-white">
                                                        <i className="fas fa-search"></i>
                                                        <p className="ml-3.5">Search</p>
                                                    </div>
                                                </Link>
                                                <div className="text-light-400 bg-opacity-10 flex hover:text-white items-center px-4 py-1 rounded-sm text-white">
                                                    <i className="fas fa-bookmark"></i>
                                                    <p className="ml-3.5">Your Library</p>
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="mt-10 text-white space-y-3 px-4">
                                            <div className="border-b border-darkgray-300 border-opacity-60 flex items-center opacity-70 pb-5">
                                                <div className="bg-gradient-to-br from-purple-light px-2 py-1 rounded-sm to-white">
                                                    <i className="fas fa-heart text-sm text-white"></i>
                                                </div>
                                                <p className="ml-3.5">Liked Songs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white text-opacity-70 pl-8">
                                    <div>
                                        <div className="mt-4 flex items-center justify-between opacity-25">
                                            <input
                                                type="text"
                                                style={{boxShadow: '0 0 0'}}
                                                className="bg-transparent border-0 p-0"
                                                placeholder="Create Playlist"/>
                                            <div className="ml-0.5 px-2 py-0.5 rounded-sm">
                                                <button className="h-8 w-8">
                                                    <i className="fa-plus fas text-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-h-56 overflow-y-scroll">
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
                        </div>
                        <div className="bg-darkgray-950 relative flex-grow h-full overflow-y-scroll">
                            <TopHeader/>
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

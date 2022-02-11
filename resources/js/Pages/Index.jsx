import React from 'react';
import Footer from '@/Module/Footer';
import Layout from "@/Layouts/Layout";
import AlbumBox from "@/Components/Box/AlbumBox";
import {usePage} from "@inertiajs/inertia-react";
import AlbumBar from "@/Components/Bar/AlbumBar";

const Index = () => {
    const {albums} = usePage().props;
    return (
        <div className="h-0">
            <div className="px-8 pt-8 ">
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
                    <AlbumBar
                        heading="Your Top Shows"
                        data={albums}/>
                </div>
                <div className="mt-10">
                    <AlbumBar
                        heading="Your Top Shows"
                        data={albums}/>
                </div>
                <div className="mt-10">
                    <AlbumBar
                        heading="Your Top Shows"
                        data={albums}/>
                </div>
            </div>
        </div>
    );
};

Index.layout = page => <Layout children={page}/>

export default Index;

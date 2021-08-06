import React from 'react';
import Footer from '@/Shared/Footer';
import Layout from "@/Layouts/Layout";
import AlbumBox from "@/Components/AlbumBox";

const Index = () => {

    return (
        <div className="h-0">
            <div className="px-8 pt-16 ">
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
                        <AlbumBox/>
                        <AlbumBox/>
                        <AlbumBox/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Index.layout = page => <Layout children={page}/>

export default Index;

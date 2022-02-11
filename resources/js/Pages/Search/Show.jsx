import React from 'react';
import Layout from "@/Layouts/Layout";
import SearchInput from "@/Components/Input/SearchInput";
import AlbumBar from "@/Components/Bar/AlbumBar";
import {usePage} from "@inertiajs/inertia-react";

const Show = () => {
    const {albums} = usePage().props;

    return (
        <Layout>
            <div className="mt-3 mx-10">
                <SearchInput/>
                <div className="mt-10">
                    <AlbumBar
                        heading="Recent searches"
                        data={albums}/>
                </div>
            </div>
        </Layout>
    );
};

export default Show;

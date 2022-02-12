import React from 'react';
import Layout from "@/Layouts/Layout";
import SearchInput from "@/Components/Input/SearchInput";
import AlbumBar from "@/Components/Bar/AlbumBar";
import {usePage} from "@inertiajs/inertia-react";
import TopResult from "@/Components/Box/TopResult";
import Heading from "@/Components/Other/Heading";
import ResultRecord from "@/Components/Record/ResultRecord";

const Show = () => {
    const {albums} = usePage().props;
    let album = albums[0]
    return (
        <Layout>
            <div className="mt-3 mx-10">
                <SearchInput/>
                <div className="mt-10">
                    <div className="gap-x-8 grid grid-cols-10">
                        <div id="top-result" className="col-span-4">
                            <Heading heading="Top result"/>
                            <TopResult
                                title="Easy on me"
                                src={album.cover}
                                artist="Adele"
                                type="artist"/>
                        </div>
                        <div id="songs" className="col-span-6">
                            <Heading heading="Songs" hasSeeAll />
                            <ResultRecord title="Oh My God" src={album.cover} />
                            <ResultRecord title="Oh My God" src={album.cover} />
                            <ResultRecord title="Oh My God" src={album.cover} />
                            <ResultRecord title="Oh My God" src={album.cover} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

{/*<AlbumBar*/
}
{/*    heading="Recent searches"*/
}
{/*    data={albums}/>*/
}
export default Show;

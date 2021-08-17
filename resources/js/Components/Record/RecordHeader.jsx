import React from 'react';

const RecordHeader = ({isPlaylist}) => {

    return (
        <>
            <div className="grid grid-cols-9 gap-x-4 text-sm border-b border-opacity-20 pb-2 text-darkgray-100 mb-3 uppercase">
                <div className={`${isPlaylist ? "col-span-4" : "col-span-5"} pl-8`}><span className="mr-5">#</span>title
                </div>
                <div className={`${isPlaylist ? "col-span-2" : "col-span-1 justify-end"} flex items-center`}>{isPlaylist ? "Album" : "Plays"}</div>
                {isPlaylist ? (
                    <div className="col-span-2 flex items-center"> Date Added</div>
                ) : ""}
                <div className={`${isPlaylist ? "" : "col-start-9"} col-span-1 flex items-center justify-end pr-8`}>
                    <i className="far fa-clock"></i></div>
            </div>
        </>
    );
};

export default RecordHeader;

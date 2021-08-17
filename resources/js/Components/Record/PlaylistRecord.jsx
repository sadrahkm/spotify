import React, {useState} from 'react';
import Like from "@/Components/Button/Like";

const PlaylistRecord = ({title, plays, time, path, index, hasCover}) => {
    const [showButtons, setShowButtons] = useState(false);
    return (
        <div
            className="hover:bg-opacity-10 hover:bg-white py-2 rounded-md"
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            <div className="grid grid-cols-9 gap-4 text-darkgray-100">
                <div className="col-span-4 pl-8">
                    <div className="flex items-center">
                        <span
                            className="w-8"
                        >
                            {showButtons ? (
                                <div>
                                    <button><i className="fas fa-play text-xs"></i></button>
                                </div>
                            ) : index}
                        </span>
                        <div className="flex min-w-0 flex-1 space-x-3">
                            {hasCover ? (
                                <img
                                    className="w-10 rounded-sm"
                                    src="/images/cover.jpg"
                                    alt=""/>
                            ) : ""}
                            <div className="flex flex-col flex-1 min-w-0">
                                <h5 className="text-white font-semibold truncate">{title}</h5>
                                <p className="text-xs">Coldplay</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex items-center text-sm">
                    I Am ... Sasha - Plantium Edition
                </div>
                <div className="col-span-2 flex items-center text-sm">
                    May 29, 2021
                </div>
                <div className="col-span-1 col-start-9 pr-8 flex items-center justify-end space-x-4">
                    {showButtons ? (
                        <Like/>
                    ) : ""}
                    <span>
                        4:11
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PlaylistRecord;

import React, {useState} from 'react';
import Like from "@/Components/Button/Like";

const AlbumRecord = ({title, plays, time, src, index, hasOnlyTime}) => {
    const [showButtons, setShowButtons] = useState(false);
    return (
        <div
            className="hover:bg-opacity-10 hover:bg-white py-2 rounded-md"
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            <div className="grid grid-cols-9 text-darkgray-100">
                <div className={`${hasOnlyTime ? "col-span-8" : "col-span-5"} px-2`}>
                    <div className="flex items-center">
                        <div className="flex min-w-0 flex-1 space-x-3">
                            {src ? (
                                <div className="relative">
                                    <img
                                        className="w-10 rounded-sm"
                                        src={src}
                                        alt=""/>
                                    {showButtons ?
                                        <div className="absolute bottom-0 bg-black bg-opacity-30 left-0 right-0 top-0">
                                            <button className="h-full w-full">
                                                <i className="fas fa-play text-xs"/>
                                            </button>
                                        </div>
                                        : ""}
                                </div>
                            ) : ""}
                            <div className="flex flex-col flex-1 min-w-0">
                                <h5 className="text-white font-semibold truncate">{title}</h5>
                                <p className="text-xs">Coldplay</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-span-1 col-start-9 pr-8 flex items-center justify-end space-x-4`}>
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

export default AlbumRecord;

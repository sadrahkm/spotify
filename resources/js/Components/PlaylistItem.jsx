import React, {useState} from 'react';

const PlaylistItem = ({title, plays, time, path, index}) => {
    const [showPlayButton, setShowPlayButton] = useState(false);
    return (
        <div
            className="hover:bg-opacity-10 hover:bg-white py-3 rounded-md"
            onMouseEnter={() => setShowPlayButton(true)}
            onMouseLeave={() => setShowPlayButton(false)}
        >
            <div className="grid grid-cols-9 text-darkgray-100">
                <div className="col-span-5 pl-8">
                    <div className="flex items-center">
                        <span
                            className="mr-5"
                        >
                            {showPlayButton ? (
                                <div>
                                    <button><i className="fas fa-play text-xs"></i></button>
                                </div>
                            ) : index}
                        </span>
                        <div className="flex flex-col flex-1 min-w-0">
                            <h5 className="text-white font-semibold truncate">{title}</h5>
                            <p className="text-xs">Coldplay</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                    {plays}
                </div>
                <div className="col-span-1 col-start-9 flex items-center justify-end pr-8">
                    4:11
                </div>
            </div>
        </div>
    );
};

export default PlaylistItem;

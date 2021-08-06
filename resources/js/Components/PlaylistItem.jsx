import React, {useState} from 'react';

const PlaylistItem = () => {
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
                            ) : 1}
                        </span>
                        <div className="flex items-center">
                            <img
                                className="w-12"
                                src="/images/cover.jpg"
                                alt=""/>
                            <div className="flex flex-col ml-4">
                                <h5 className="text-white font-bold">Viva La Vida - Live in Buenos
                                    Aires</h5>
                                <p className="text-xs">Coldplay</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 flex items-center">
                    Live in Buenos Aires
                </div>
                <div className="col-span-1 flex items-center">
                    4:11
                </div>
            </div>
        </div>
    );
};

export default PlaylistItem;

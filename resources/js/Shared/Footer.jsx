import React from 'react';
import WhitePlayButton from "@/Components/Player/WhitePlayButton";
import AudioPlayer from "@/Components/Player/AudioPlayer";
import Mute from "@/Components/Player/Mute";

const Footer = () => {

    return (
        <footer className="bg-darkgray-600 flex-grow-0 flex-none h-18 pb-3 pt-3.5 px-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-16 mr-3">
                        <img
                            src="/images/cover.jpg"
                            alt=""/>
                    </div>
                    <div className="text-white">
                        <h4>Still call you mine</h4>
                        <p className="text-xs">Famba</p>
                    </div>
                </div>
                <div className="w-4/12">
                    <AudioPlayer/>
                </div>
                <Mute/>
            </div>
        </footer>
    );
};

export default Footer;

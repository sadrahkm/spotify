import React from 'react';
import WhitePlayButton from "@/Components/Player/WhitePlayButton";

const AudioPlayer = () => {
    const showRangeProgress = (rangeInput) => {
        if (rangeInput === document.getElementById('seek-slider')) {
            document.getElementById('audio-player-container').style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        }
    }
    return (
        <div
            id="audio-player-container"
            className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-3 space-x-6 text-darkgray-100 text-sm w-full">
                <i className="fas fa-step-backward"></i>
                <WhitePlayButton className="w-8"/>
                <i className="fas fa-step-forward"></i>
            </div>
            <div className="flex space-x-3 text-darkgray-100 text-xs w-full">
                <span>0:00</span>
                <input
                    className="w-full"
                    onInput={(event) => showRangeProgress(event.target)}
                    id="seek-slider"
                    type="range"
                    max="100"
                />
                <span>3:40</span>
            </div>
        </div>
    );
};

export default AudioPlayer;

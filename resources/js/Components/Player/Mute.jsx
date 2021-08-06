import React, {useState} from 'react';

const Mute = () => {
    const [isMute, setIsMute] = useState(false)
    const showRangeProgress = (rangeInput) => {
        if (rangeInput === document.getElementById('volume-slider')) {
            document.getElementById('mute-container').style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        }
    }

    function handleMute() {
        if (isMute)
            setIsMute(false);
        else
            setIsMute(true);
    }

    return (
        <div id="mute-container" className="flex items-center">
            <button
                className="text-darkgray-100 text-lg mr-2"
                onClick={handleMute}>
                {isMute ? (
                    <i className="fas fa-volume-mute"></i>
                ) : (
                    <i className="fas fa-volume-down"></i>
                )}
            </button>
            <input
                onInput={(event) => showRangeProgress(event.target)}
                id="volume-slider"
                type="range"
                max="100"
            />
        </div>
    );
};

export default Mute;

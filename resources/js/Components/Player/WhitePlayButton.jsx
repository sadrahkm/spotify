import React, {useEffect, useState, useRef} from 'react';
import Layout from "@/Layouts/Layout";
import lottieWeb from "lottie-web";

const WhitePlayButton = ({...rest}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    function handleClick() {
        if (isPlaying)
            setIsPlaying(false);
        else
            setIsPlaying(true);
    }

    return (
        <div {...rest}>
            <button
                onClick={() => handleClick()}
                id="container"
                className="bg-white flex h-9 items-center justify-center rounded-full text-black w-9">
                {isPlaying ? (
                    <i className="fas fa-pause"></i>
                ) : (
                    <i className="fas fa-play"></i>
                )}
            </button>
        </div>
    );
};

export default WhitePlayButton;

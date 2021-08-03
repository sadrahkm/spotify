import React from 'react';

const Footer = () => {

    return (
        <footer className="h-1/6 bg-darkgray-600 p-5">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="w-16 mr-3">
                        <img
                            src="images/cover.jpg"
                            alt=""/>
                    </div>
                    <div className="text-white">
                        <h4>Still call you mine</h4>
                        <p className="text-xs">Famba</p>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </footer>
    );
};

export default Footer;

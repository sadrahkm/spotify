import ApplicationLogo from '../Components/ApplicationLogo';
import React from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';

export default function Guest({children, title}) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-darkgray-500">
            <div className="w-full sm:max-w-md my-6 px-16 py-8 bg-darkgray-800 shadow-md overflow-hidden sm:rounded-lg">
                <div className="flex justify-center">
                    <ApplicationLogo className="w-60"/>
                </div>
                <h3 className="font-bold mb-8 text-3xl text-center text-white">
                    {title}
                </h3>
                {children}
            </div>
        </div>
    );
}

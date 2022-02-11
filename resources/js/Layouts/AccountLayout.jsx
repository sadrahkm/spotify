import React from 'react';
import ApplicationLogo from "@/Components/ApplicationLogo";
import AvatarPic from "@/Components/AvatarPic";
import AccountMenuItem from "@/Components/MenuItem/AccountMenuItem";


const AccountLayout = ({children}) => {

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-b from-background-purple-light to-background-purple-dark">
            <div className="w-10/12 h-screen">
                <div className="grid grid-cols-8 h-full">
                    <div className="bg-darkgray-600 col-span-2">
                        <div className="flex justify-center my-8">
                            <AvatarPic
                                src="/images/cover.jpg"
                                size="md"/>
                        </div>
                        <AccountMenuItem
                            title="Homepage"
                            link="/"/>
                        <AccountMenuItem
                            title="Account overview"
                            link="/account/overview"/>
                        <AccountMenuItem
                            title="Edit profile"
                            link="/account/edit"/>
                        <AccountMenuItem
                            title="Change password"
                            link="/account/password"/>
                    </div>
                    <div className="px-16 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg col-span-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;

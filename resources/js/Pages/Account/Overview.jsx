import React from 'react';
import AccountLayout from "@/Layouts/AccountLayout";
import {usePage} from "@inertiajs/inertia-react";

const Overview = () => {
    const {auth} = usePage().props;
    return (
        <AccountLayout>
            <div>
                <header className="mt-4">
                    <h2 className="font-extrabold text-4xl">Account Overview</h2>
                </header>
                <section className="mt-10">
                    <h3 className="font-bold mb-6 text-2xl">Profile</h3>
                    <div className="border-b py-3">
                        <div className="grid grid-cols-6">
                            <span className="col-span-3 text-darkgray-100">Username</span>
                            <span>{auth.user.username}</span>
                        </div>
                    </div>
                    <div className="border-b py-3">
                        <div className="grid grid-cols-6">
                            <span className="col-span-3 text-darkgray-100">Email</span>
                            <span>{auth.user.email}</span>
                        </div>
                    </div>
                    <div className="border-b py-3">
                        <div className="grid grid-cols-6">
                            <span className="col-span-3 text-darkgray-100">Date of birth</span>
                            <span>--</span>
                        </div>
                    </div>
                    <div className="border-b py-3">
                        <div className="grid grid-cols-6">
                            <span className="col-span-3 text-darkgray-100">Country or region</span>
                            <span>--</span>
                        </div>
                    </div>
                </section>
            </div>
        </AccountLayout>
    );
};

export default Overview;

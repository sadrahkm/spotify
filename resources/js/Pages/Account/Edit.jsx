import React from 'react';
import AccountLayout from "@/Layouts/AccountLayout";
import EditInput from "@/Components/Input/EditInput";
import WideButton from "@/Components/Button/WideButton";

const Overview = () => {

    return (
        <AccountLayout>
            <div>
                <header className="mt-4">
                    <h2 className="font-extrabold text-4xl">Edit profile</h2>
                </header>
                <section className="mt-10">
                    <EditInput
                        id="name"
                        label="Name"/>
                    <EditInput
                        id="email"
                        label="Email"/>
                    <div className="flex justify-end">
                        <WideButton className="px-10 bg-primary-lightgreen text-black">SAVE
                            PROFILE</WideButton>
                    </div>
                </section>
            </div>
        </AccountLayout>
    );
};

export default Overview;

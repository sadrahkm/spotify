import React from 'react';
import AccountLayout from "@/Layouts/AccountLayout";
import EditInput from "@/Components/Input/EditInput";
import WideButton from "@/Components/Button/WideButton";

const Overview = () => {

    return (
        <AccountLayout>
            <div>
                <header className="mt-4">
                    <h2 className="font-extrabold text-4xl">Change password</h2>
                </header>
                <section className="mt-10">
                    <EditInput
                        id="current"
                        type="password"
                        label="Current password"/>
                    <EditInput
                        id="confirm"
                        type="password"
                        label="New password"/>
                    <EditInput
                        id="confirm2"
                        type="password"
                        label="Repeat new password"/>
                    <div className="flex justify-end">
                        <WideButton className="px-10 bg-primary-lightgreen text-black">SAVE
                            NEW PASSWORD</WideButton>
                    </div>
                </section>
            </div>
        </AccountLayout>
    );
};

export default Overview;

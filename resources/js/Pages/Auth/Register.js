import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input/Input';
import Label from '@/Components/Input/Label';
import React, {useEffect} from 'react';
import ValidationErrors from '@/Components/ValidationErrors';
import {InertiaLink} from '@inertiajs/inertia-react';
import {useForm} from '@inertiajs/inertia-react';
import GreenSwitch from "@/Components/Button/GreenSwitch";
import WideButton from "@/Components/Button/WideButton";
import Facebook from "@/Components/Icon/Facebook";
import Google from "@/Components/Icon/Google";

export default function Register() {
    const {data, setData, post, processing, errors, reset} = useForm({
        username: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest title="Sign up for a free Spotify account.">
            <ValidationErrors errors={errors}/>

            <form onSubmit={submit}>
                <div>
                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={onHandleChange}
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="mt-4">
                    <Input
                        type="text"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={onHandleChange}
                        placeholder="Username"
                        required
                    />
                </div>

                <div className="mt-4">
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        onChange={onHandleChange}
                        placeholder="Email"
                        required
                    />
                </div>

                <div className="mt-4">
                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        onChange={onHandleChange}
                        placeholder="Password"
                        required
                    />
                </div>

                <div className="mt-4">
                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        onChange={onHandleChange}
                        placeholder="Password Confirmation"
                        required
                    />
                </div>

                <WideButton
                    className="mt-8 bg-primary-lightgreen text-white">
                    Continue
                </WideButton>

                <div className="mt-8 text-center">
                    <hr className="border-darkgray-400"/>
                    <span className="-top-2.5 bg-darkgray-800 px-4 relative text-white">OR</span>
                </div>

                <div>
                    <WideButton
                        className="border border-light-400 bg-transparent text-white"
                        icon={<Facebook className="rounded-full"/>}>Sign up with Facebook</WideButton>
                </div>

                <div className=" flex items-center justify-center mt-6">
                    <p className="text-light-400">
                        Already on Spotify ?
                    </p>
                    <InertiaLink href={route('login')}>
                        <span className="underline font-extrabold text-white ml-2">LOGIN</span>
                    </InertiaLink>
                </div>
            </form>
        </Guest>
    );
}

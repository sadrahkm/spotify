import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
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

export default function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: '',
        is_artist: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    console.log(data);


    return (
        <Guest title="Log in to continue.">
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors}/>

            <form onSubmit={submit}>
                <div>
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        // isFocused={true}
                        onChange={onHandleChange}
                        placeholder="Email"
                    />
                </div>

                <div className="mt-4">
                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={onHandleChange}
                        placeholder="Password"
                    />
                </div>

                <p className="text-light-400 underline text-sm my-2 mb-4">Reset Password</p>

                <div className="space-y-3">
                    <GreenSwitch
                        name="remember"
                        onChange={onHandleChange}
                        label="Remember me"/>

                    <GreenSwitch
                        name="is_artist"
                        onChange={onHandleChange}
                        label="Are you an artist ?"
                    />
                </div>

                <WideButton
                    className="mt-8 bg-white text-darkgray-800">
                    Log in
                </WideButton>

                <div className="mt-8 text-center">
                    <hr className="border-darkgray-400"/>
                    <span className="-top-2.5 bg-darkgray-800 px-4 relative text-white">OR</span>
                </div>

                <div>
                    <WideButton
                        className="border border-light-400 bg-transparent text-white"
                        icon={<Facebook className="rounded-full"/>}>Continue with Facebook</WideButton>
                    <WideButton
                        className="border border-light-400 bg-transparent text-white"
                        icon={<Google className="rounded-full"/>}>Continue with Google</WideButton>
                </div>

                <div className=" flex items-center justify-center mt-6">
                    <p className="text-light-400">
                        Don't have an account ?
                    </p>
                    <InertiaLink href={route('register')}>
                        <span className="underline font-extrabold text-white ml-2">SIGN UP</span>
                    </InertiaLink>
                </div>
            </form>
        </Guest>
    );
}

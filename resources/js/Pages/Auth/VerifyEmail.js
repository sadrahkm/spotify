import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm();

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>

         </>
    );
}

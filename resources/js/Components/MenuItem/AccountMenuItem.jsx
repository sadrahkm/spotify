import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from '@inertiajs/inertia-react'

const AccountMenuItem = ({title, link}) => {
    console.log(title, link)
    return (
        <Link
            href={link}
        >
            <div className="flex border-b border-darkgray-200 py-4 text-light-400 px-9">
                <EditIcon/>
                <h4 className="ml-4">
                    {title}
                </h4>
            </div>
        </Link>
    );
};

export default AccountMenuItem;

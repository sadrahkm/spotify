import React from 'react';
import {Avatar, makeStyles} from "@material-ui/core";
import clsx from "clsx";

const mapSizes = {
    xs: "2",
    sm: "3.875",
    md: "4",
    lg: "6",
    xl: "14.375",
};

const useStyles = makeStyles({
    avatar: ({size}) => ({
        width: `${mapSizes[size]}rem`,
        height: `${mapSizes[size]}rem`,
    }),
    border: {
        border: "1px solid #adadad",
    },
});
const AvatarPic = ({alt, src, size = 'xs', className}) => {
    const classes = useStyles({size});
    return (
        <>
            <Avatar
                alt={alt}
                src={src}
                className={clsx(
                    classes.avatar,
                    `${className || ""}`
                )}
            />
        </>
    );
};
export default AvatarPic;

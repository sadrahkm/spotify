import {useState} from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {purple} from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {makeStyles} from "@material-ui/core";

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
    },
    switchBase: {
        padding: 1,
        color: theme.palette.light[400],
        '&$checked': {
            transform: 'translateX(16px)',
            color: "white",
            '& + $track': {
                backgroundColor: theme.palette.primary.main,
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.light[400]}`,
        backgroundColor: "#000",
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({classes, ...props}) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

const useStyle = makeStyles((theme) => ({
    root: {
        "display": "flex",
        justifyContent: 'space-between',
        color: theme.palette.light[400],
        margin: 0
    }
}));

const GreenSwitch = ({onChange, label, name}) => {
    const classes = useStyle();
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(!checked);
        onChange(event);
    };
    return (
        <div>
            <FormControlLabel
                control={<IOSSwitch
                    checked={checked}
                    onChange={handleChange}
                    name={name}
                />}
                label={label}
                labelPlacement="start"
                classes={{
                    root: classes.root
                }}
            />
        </div>
    );
};

export default GreenSwitch;

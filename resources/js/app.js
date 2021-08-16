require('./bootstrap');

// Import modules...
import React from 'react';
import {render} from 'react-dom';
import {App} from '@inertiajs/inertia-react';
import {InertiaProgress} from '@inertiajs/progress';
import {createInertiaApp} from '@inertiajs/inertia-react'
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';


const el = document.getElementById('app');

InertiaProgress.init({color: '#4B5563'});
const theme = createTheme({
    palette: {
        primary: {
            main: "#1db954",
        },
        purple: {
            light: "#5018f0", // top shadow
        },
        light: {
            400: "#b3b3b3", // Menu (not focused)
            500: "#898989",
        },
        darkgray: {
            100: "#a9a9a9", // Gray Text color
            200: "#333333", // bg of inputs
            300: "#3b3b3b", // Gradient dark color
            400: "#282828", // bg for focused menu item
            500: "#2b2b2b", // gradient light color
            600: "#181818", // player bg
            700: "rgba(0,0,0,.7)", // Top buttons
            800: "#121212", // main bg
        }
    },
});

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({el, App, props}) {
        render(
            <ThemeProvider theme={theme}>
                <App {...props} />
            </ThemeProvider>
            , el)
    },
})


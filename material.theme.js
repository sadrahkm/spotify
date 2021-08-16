import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            lightgreen: "#1db954",
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

export default theme;

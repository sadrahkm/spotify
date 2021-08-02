module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                purple: {
                  light: "#5018f0", // top shadow
                },
                light: {
                    400: "#b3b3b3", // Menu (not focused)
                    500: "#898989",
                },
                darkgray: {
                    400: "#282828", // bg for focused menu item
                    600: "#181818", // player bg
                    700: "rgba(0,0,0,.7)", // Top buttons
                    800: "#121212", // main bg
                }
            } // opacity for unfocused menu items is 0.7
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

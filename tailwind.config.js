const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
        },
        fontFamily: {},
        extend: {
            height: theme => ({
                'screen': '100vh',
                'screen/2': '50vh',
                'screen/3': 'calc(100vh / 3)',
                'screen/4': 'calc(100vh / 4)',
                'screen/5': 'calc(100vh / 5)',
            }),
            width: theme => ({
                'screen': '100vw',
                'screen/2': '50vw',
                'screen/3': 'calc(100vw / 3)',
                'screen/4': 'calc(100vw / 4)',
                'screen/5': 'calc(100vw / 5)',
            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

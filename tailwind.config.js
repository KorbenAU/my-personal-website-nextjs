const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#001219',
            white: '#fff',
            blue_dark: '#005f73',
            blue: '#0a9396',
            blue_light: '#94d2bd',
            tease: '#e9d8a6',
            orange: '#ee9b00',
            orange_dark: '#bb3e03',
            red: '#ae2012',
            red_dark: '#9b2226',
            silver: '#c7c7c4',
            azure: '#3a86ff',
            mango: '#ffbe0b'
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

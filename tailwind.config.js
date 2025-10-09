/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                fontFamily: {
                    haas: ['var(--font-haas)', ...fontFamily.sans],
                }
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};

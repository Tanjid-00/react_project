/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            height: {
                custom: '300px'
            },
            maxWidth: {
                full: '100%',
                96: '24rem', // Change the max width to 24rem (384px)
                custom: '600px' // Add a custom max width
            }
        }
    },
    darkMode: 'class',
    plugins: [
        require('tailwind-scrollbar-hide')
        // ...
    ]
};

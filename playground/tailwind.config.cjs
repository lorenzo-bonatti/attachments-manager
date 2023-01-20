/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
        // Attachments manager files
        "../src/attachments-manager/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {}
    },
    plugins: []
}

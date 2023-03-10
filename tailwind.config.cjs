/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: '#6439ff',
				gray: '#888888',
			},
			flex: {
				flexHome: 6,
			},
		},
	},
	plugins: [],
}

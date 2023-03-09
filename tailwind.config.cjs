/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: 'Nunito',
			colors: {
				purple: '#6439ff',
			},
			flex: {
				flexHome: 6,
			},
		},
	},
	plugins: [],
}

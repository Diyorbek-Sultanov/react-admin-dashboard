const { default: plugin } = require('tailwindcss')

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
				flexFeatured: 2,
				flexChart: 4,
			},
			boxShadow: {
				widgetShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
			},
			backgroundColor: {
				widgetIconBgPerson: 'rgba(255, 0, 0, .2)',
				widgetIconBgShop: 'rgba(218, 165, 32, .2)',
				widgetIconBgMoney: 'rgba(0, 128, 0, .2)',
				widgetIconBgBalance: 'rgba(128, 0, 128, .2)',
				statusApproved: 'rgba(0, 128, 0, .151)',
				statusPending: 'rgba(189, 189, 3, .103)',
			},
			gridTemplateColumns: {
				chartCols: '2fr, 5fr',
			},
		},
	},
	plugins: [
		//plugin(({ addUtilities }) => {
		//	addUtilities({
		//		'flex-content-col': {
		//			display: 'flex',
		//			flexDirection: 'column',
		//			justifyContent: 'space-between',
		//		},
		//	})
		//}),
	],
}

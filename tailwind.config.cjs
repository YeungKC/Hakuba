/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '768px',
			md: '768px',
			lg: '768px',
			xl: '768px',
			'2xl': '768px'
		},
		container: {
			center: true
		},
		extend: {}
	},
	plugins: [
		({ addVariant }) => {
			addVariant('child', '& > *');
		},
		require('@tailwindcss/typography')
	]
};

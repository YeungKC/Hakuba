/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
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

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				black: '#000814',
				'dark-blue': '#001d3d',
				blue: '#003566',
				yellow: '#ffc300',
				'bright-yellow': '#ffd60a'
			}
		}
	},
	plugins: []
};

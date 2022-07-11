import { sveltekit } from '@sveltejs/kit/vite';
import { visualizer } from 'rollup-plugin-visualizer';

const lifecycle = process.env.npm_lifecycle_event;

const plugins = [sveltekit()];

if (lifecycle === 'report') {
	plugins.push(visualizer({ open: true, gzipSize: true, filename: 'report.html' }));
}
/** @type {import('vite').UserConfig} */
const config = {
	plugins: plugins
};

export default config;

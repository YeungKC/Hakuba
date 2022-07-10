import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				alias: { vue: 'html' }
			},
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeExternalLinks],
			layout: 'src/routes/__layout-md.svelte'
		})
	],

	kit: {
		adapter: adapter({ fallback: '404.html' }),
		prerender: {
			default: true
		}
		// inlineStyleThreshold: 1024 * 32
	}
};

export default config;

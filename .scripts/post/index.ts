import dotenv from 'dotenv';
import { createSitemap } from 'svelte-sitemap/src/index.js';
dotenv.config({ path: '.env.local' });

const domain = process.env.VITE_DOMAIN;

if (!domain) {
	console.log("DOMAIN is not defined, don't create sitemap");
} else {
	createSitemap(domain);
	console.log('sitemap created');
}

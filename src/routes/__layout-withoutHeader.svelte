<script>
	import '../app.css';
	import '../code.css';
	import Footer from '$lib/components/Footer.svelte';
	import { BLOG_NAME, DESCRIPTION, KEYWORDS, TWITTER, LANG } from '../lib/constants';
</script>

<svelte:head>
	<title>{BLOG_NAME}</title>
	<meta property="og:title" content={BLOG_NAME} />
	<meta name="description" content={DESCRIPTION} />
	<meta property="og:description" content={DESCRIPTION} />
	<meta name="keywords" content={KEYWORDS} />

	<meta property="og:site_name" content={BLOG_NAME} />
	<meta property="generator" content="Hakuba" />
	<meta property="twitter:card" content="summary" />
	{#if TWITTER}
		<meta name="twitter:site" content={`@${TWITTER}`} />
		<meta name="twitter:creator" content={`@${TWITTER}`} />
	{/if}
</svelte:head>

<main class="flex flex-grow flex-col" lang={LANG}>
	<slot />
</main>

<Footer />

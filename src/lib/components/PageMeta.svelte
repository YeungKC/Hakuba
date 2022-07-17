<script lang="ts">
	import type Post from '$lib/types/post';
	import type Page from '$lib/types/page';

	export let metadata: Post | Page;
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta property="og:title" content={metadata.title} />
	{#if 'excerpt' in metadata && metadata.excerpt}
		<meta name="description" content={metadata.excerpt} />
		<meta property="og:description" content={metadata.excerpt} />
	{/if}
	{#if 'labels' in metadata && metadata.labels?.length}
		<meta name="keywords" content={metadata.labels.join(',')} />
	{/if}
</svelte:head>

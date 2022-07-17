<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { SvelteComponent } from 'svelte';
	import Giscus from '$lib/components/Giscus.svelte';
	import type Page from '$lib/types/page';
	import PageMeta from '$lib/components/PageMeta.svelte';

	export const load: Load = async () => {
		const { default: component, metadata } = await import('./_page/__error.md');

		return {
			props: {
				component,
				metadata
			}
		};
	};
</script>

<script lang="ts">
	export let component: SvelteComponent;
	export let metadata: Page;
</script>

<PageMeta {metadata} />

<svelte:component this={component} />

<Giscus config={metadata} />

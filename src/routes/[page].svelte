<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { SvelteComponent } from 'svelte';
	import { fetchPage } from '$lib/helper/fetchPage';
	import type Page from '$lib/types/page';
	import Giscus from '$lib/components/Giscus.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';

	export const load: Load = async ({ params: { page } }) => {
		const p = await fetchPage(page);
		if (!p) return { status: 404 };

		return {
			props: {
				metadata: p.metadata as Page,
				component: p.component
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

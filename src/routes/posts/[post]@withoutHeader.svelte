<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { SvelteComponent } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import type Post from '$lib/types/post';
	import Article from '$lib/components/Article.svelte';
	import Labels from '$lib/components/Labels.svelte';
	import { readableDate } from '$lib/helper/readableDate';
	import { fetchPost } from '../../lib/helper/fetchPosts';

	export const load: Load = async ({ params }) => {
		try {
			const post = await fetchPost(params.post);
			if (!post) {
				throw new Error('Post not found');
			}

			return {
				props: post
			};
		} catch {
			return { status: 404 };
		}
	};
</script>

<script lang="ts">
	import BackButton from '../../lib/components/BackButton.svelte';

	export let component: SvelteComponent;
	export let metadata: Post;

	const labels = metadata.labels?.map(({ name }) => name);
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta property="og:title" content={metadata.title} />
	{#if metadata.excerpt}
		<meta name="description" content={metadata.excerpt} />
		<meta property="og:description" content={metadata.excerpt} />
	{/if}
	{#if labels?.length}
		<meta name="keywords" content={labels.join(',')} />
	{/if}
</svelte:head>

<Article>
	<header class="mb-14 flex flex-col">
		<Header class="group relative">
			{metadata.title}
			<BackButton />
		</Header>
		<div
			class="flex flex-col justify-center [&_*]:!text-sm [&_*]:!font-normal [&_*]:!text-slate-600 "
		>
			<span class=" mt-4 self-start border-t border-t-slate-900 pt-2">
				Published: {readableDate(metadata.published)}
			</span>
			{#if metadata.updated}
				<span>
					Updated: &nbsp;&nbsp;{readableDate(metadata.updated)}
				</span>
			{/if}
			<Labels {labels} />
		</div>
	</header>

	<svelte:component this={component} />
</Article>

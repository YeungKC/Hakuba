<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { SvelteComponent } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import type Post from '$lib/types/post';
	import Article from '$lib/components/Article.svelte';
	import Labels from '$lib/components/Labels.svelte';
	import { readableDate } from '$lib/helper/readableDate';

	export const load: Load = async ({ params }) => {
		try {
			const post: SvelteComponent = await import(`./_source/${params.post}.md`);

			return {
				props: {
					PostContent: post.default,
					meta: { ...post.metadata, slug: params.post }
				}
			};
		} catch {
			return { status: 404 };
		}
	};
</script>

<script lang="ts">
	export let PostContent: SvelteComponent;
	export let meta: Post;
</script>

<Article>
	<header class="mb-14 flex flex-col">
		<Header>{meta.title}</Header>
		<div
			class="flex flex-col justify-center [&_*]:!text-sm [&_*]:!font-normal [&_*]:!text-slate-600 "
		>
			<span class=" mt-4 self-start border-t border-t-slate-900 pt-2">
				Published: {readableDate(meta.createdAt)}
			</span>
			{#if meta.lastEditedAt}
				<span>
					Updated: &nbsp;&nbsp;{readableDate(meta.lastEditedAt)}
				</span>
			{/if}
			<Labels labels={meta.labels} />
		</div>
	</header>

	<svelte:component this={PostContent} />
</Article>

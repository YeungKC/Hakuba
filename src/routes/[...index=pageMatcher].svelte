<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type Post from '$lib/types/post';
	import { BLOG_NAME, PAGE_SIZE } from '$lib/constants';
	import { fetchPosts, fetchLabels } from '$lib/helper/fetchPosts';
	import LabelsSection from '$lib/components/LabelsSection.svelte';
	import PostsSection from '$lib/components/PostsSection.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import { listMatcher } from '../params/pageMatcher';

	export const load: Load = async ({ params }) => {
		const { label, page: pageString } = listMatcher(params.index) ?? {};

		let currentPage = Number.parseInt(pageString ?? '1');
		currentPage = (Number.isFinite(currentPage) && currentPage) || 1;

		const [{ list, count: totalCount }, labels] = await Promise.all([
			fetchPosts({
				label: label,
				offset: (currentPage - 1) * PAGE_SIZE,
				limit: PAGE_SIZE
			}),
			fetchLabels()
		]);

		const basePath = label ? `/labels/${label}/page/` : '/page/';

		const buildTitle = (selected: string | undefined, currentPage: number) => {
			let title = `${BLOG_NAME}`;

			if (selected) title = `${title} - Lbael ${selected}`;
			if (currentPage > 1) title = `${title} - Page ${currentPage}`;
			return title;
		};

		return {
			props: {
				selected: label,
				labels,
				posts: list.map(({ metadata }) => metadata),
				totalCount,
				currentPage,
				basePath,
				title: buildTitle(label, currentPage)
			}
		};
	};
</script>

<script lang="ts">
	export let selected: string | undefined;
	export let labels: [string, number][];
	export let currentPage: number;
	export let posts: Post[];
	export let totalCount: number;
	export let basePath: string;
	export let title: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<AboutSection />
<LabelsSection {labels} {selected} />
<PostsSection {posts} />
<Pagination {basePath} {currentPage} pageSize={PAGE_SIZE} {totalCount} />

{#if !labels.length && !posts.length}
	<p class="text-slate-500">No posts found.</p>
{/if}

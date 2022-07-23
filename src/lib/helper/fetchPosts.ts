import type Post from '$lib/types/post';
import type { SvelteComponent } from 'svelte';

export const fetchPosts = async ({
	offset,
	limit,
	label
}: { offset?: number; limit?: number; label?: string } = {}) => {
	let allPosts = (
		await Promise.all(
			Object.entries(import.meta.glob('../../routes/post/_source/*.md')).map(async ([, page]) => {
				const { metadata, default: component } = await page();
				return {
					metadata: metadata as Post,
					component: component as SvelteComponent
				};
			})
		)
	).sort(
		(a, b) => new Date(b.metadata.published).valueOf() - new Date(a.metadata.published).valueOf()
	);

	if (label) {
		allPosts = allPosts.filter((post) =>
			post.metadata.labels?.map(({ name }) => name)?.includes(label)
		);
	}

	const count = allPosts.length;

	if (offset) {
		allPosts = allPosts.slice(offset);
	}

	if (limit && limit < allPosts.length) {
		allPosts = allPosts.slice(0, limit);
	}

	return {
		list: allPosts,
		count: count
	};
};

export const fetchLabels = async () => {
	const { list } = await fetchPosts();
	const flatted = list
		.map((e) => e.metadata.labels?.map(({ name }) => name) ?? [])
		.flat(Infinity) as string[];

	const labels = Object.entries(
		flatted.reduce((acc, cur) => {
			acc[cur] = (acc[cur] ?? 0) + 1;
			return acc;
		}, {} as { [index: string]: number })
	);

	return labels.sort((a, b) => b[1] - a[1]);
};

export const fetchPost = async (path: string) => {
	const { list } = await fetchPosts();
	return list.find(
		({ metadata: { number, path: identifyPath } }) => identifyPath === path || `${number}` === path
	);
};

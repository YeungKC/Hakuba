import type Post from '$lib/types/post';
import { flatten, countBy, sortBy } from 'lodash-es';
import type { SvelteComponent } from 'svelte';
import { POSTS } from '../constants';

export const fetchPosts = async ({
	offset,
	limit,
	label
}: { offset?: number; limit?: number; label?: string } = {}) => {
	let allPosts = (
		await Promise.all(
			Object.entries(import.meta.glob(`../../routes/posts/_source/*.md`)).map(
				async ([path, page]) => {
					const { metadata, default: component } = await page();
					const number = path.split('/').pop()?.split('.')?.[0];
					return {
						metadata: {
							...POSTS.find((post) => `${post.number}` === number),
							metadata
						} as Post,
						component: component as SvelteComponent
					};
				}
			)
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
	return sortBy(
		Object.entries(
			countBy(flatten(list.map((e) => e.metadata.labels?.map(({ name }) => name) ?? [])))
		),
		([, count]) => -count
	);
};

export const fetchPost = async (path: string) => {
	const { list } = await fetchPosts();
	return list.find(({ metadata: { number } }) => `${number}` === path);
};

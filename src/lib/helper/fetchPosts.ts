import type Post from '$lib/types/post';
import { flatten, countBy, sortBy } from 'lodash-es';

export const fetchPosts = async ({
	offset,
	limit,
	label
}: { offset?: number; limit?: number; label?: string } = {}) => {
	let allPosts: Post[] = (
		await Promise.all(
			Object.entries(import.meta.glob(`../../routes/posts/_source/*.md`)).map(
				async ([path, page]) => {
					const { metadata } = await page();
					return metadata;
				}
			)
		)
	).sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());

	if (label) {
		allPosts = allPosts.filter((post) => post.labels?.includes(label));
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
		Object.entries(countBy(flatten(list.map((e) => e.labels ?? [])))),
		([, count]) => -count
	);
};

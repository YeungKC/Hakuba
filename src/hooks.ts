import type { Handle } from '@sveltejs/kit';
import { LANG } from '$lib/constants';
import { fetchPage } from '$lib/helper/fetchPage';
import { fetchPost } from '$lib/helper/fetchPosts';

const getLang = async ({
	routeId,
	params
}: {
	routeId: string | null;
	params: Record<string, string>;
}) => {
	if (routeId === 'posts/[post]@withoutHeader') {
		return (await fetchPost(params.post))?.metadata.lang ?? LANG;
	}
	if (routeId === '[page]') {
		return (await fetchPage(params.page))?.metadata.lang ?? LANG;
	}

	return LANG;
};

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPage: async ({ html }) => html.replace('%lang%', await getLang(event))
	});
	return response;
};

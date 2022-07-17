import { fetchPosts } from '$lib/helper/fetchPosts';
import { Feed } from 'feed';
import { BIO, BLOG_NAME, DOMAIN, EMAIL, USER_NAME } from '$lib/constants';

export const get = async () => {
	if (!DOMAIN) {
		return {
			status: 302,
			redirect: '/'
		};
	}
	const posts = await fetchPosts();
	const last = posts.list.sort(
		(a, b) =>
			new Date(b.metadata.updated || b.metadata.published).valueOf() -
			new Date(a.metadata.updated || a.metadata.published).valueOf()
	)?.[0];
	const feed = new Feed({
		id: DOMAIN,
		title: BLOG_NAME,
		description: BIO,
		copyright: `Copyright © ${new Date().getFullYear()} ${BLOG_NAME}. All Rights Reserved`,
		generator: 'Hakuba',
		updated: new Date(last?.metadata.updated || last?.metadata.published || new Date()),
		feed: `${DOMAIN}atom.xml`,
		author: {
			name: USER_NAME,
			email: EMAIL,
			link: DOMAIN
		}
	});

	posts.list.forEach(({ metadata }) => {
		feed.addItem({
			link: `${DOMAIN}posts/${metadata.number}`,
			title: metadata.title,
			date: new Date(metadata.updated || metadata.published),
			published: new Date(metadata.published),
			description: metadata.excerpt,
			category: metadata.labels
		});
	});
	return {
		headers: {
			'Content-Type': 'application/xml'
		},
		body: feed.atom1()
	};
};

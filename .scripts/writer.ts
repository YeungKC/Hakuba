import path from 'path';
import { mkdirSync, promises } from 'fs';
import { DiscussionsType } from './types';
import Post from '../src/lib/types/post';

export const writePosts = async (list: DiscussionsType[]) => {
	const dir = path.join('./src/routes/posts/_source');
	mkdirSync(dir, { recursive: true });
	await Promise.all(
		list.map(({ number, body }) => {
			const p = path.resolve(dir, `${number}.md`);
			return promises.writeFile(p, body);
		})
	);
};

export const writePages = async (list: DiscussionsType[]) => {
	const dir = path.join('./src/routes');
	mkdirSync(dir, { recursive: true });
	await Promise.all(
		list.map(({ title, body }) => {
			const p = path.resolve(dir, `${title.toLowerCase()}.md`);
			return promises.writeFile(p, body);
		})
	);
};

export const writeEnv = async (
	config: Record<string, string>,
	pages: DiscussionsType[],
	posts: DiscussionsType[]
) => {
	config.PAGES = JSON.stringify(pages.map(({ title }) => title));
	config.POSTS = JSON.stringify(
		posts.map<Post>((node) => ({
			title: node.title,
			published: node.publishedAt,
			updated: node.lastEditedAt,
			number: node.number,
			url: node.url,
			labels: node.labels.nodes
		}))
	);
	const content = Object.entries(config)
		.map(([key, value]) => `VITE_${key}=${value}`)
		.join('\n');
	return promises.writeFile('./.env.local', content);
};

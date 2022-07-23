import path from 'path';
import { mkdirSync, promises } from 'fs';
import { DiscussionsType } from './types';

export const writePosts = async (list: DiscussionsType[]) => {
	const dir = path.join('./src/routes/post/_source');
	mkdirSync(dir, { recursive: true });

	await Promise.all(
		list.map(({ number, body }) => {
			const p = path.resolve(dir, `${number}.md`);
			return promises.writeFile(p, body);
		})
	);
};

export const writePages = async (list: DiscussionsType[]) => {
	const dir = path.join('./src/routes/_page');
	mkdirSync(dir, { recursive: true });
	await Promise.all(
		list.map(({ title, body }) => {
			const p = path.resolve(dir, `${title}.md`);
			return promises.writeFile(p, body);
		})
	);
};

export const writeEnv = async (config: Record<string, string>) => {
	const content = Object.entries(config)
		.map(([key, value]) => `VITE_${key}=${value}`)
		.join('\n');
	return promises.writeFile('./.env.local', content);
};

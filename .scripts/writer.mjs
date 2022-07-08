import path from 'path';
import { mkdirSync, promises } from 'fs';

export const writePosts = async (list) => {
	const dir = path.join('./src/routes/posts/_source');
	mkdirSync(dir, { recursive: true });
	await Promise.all(
		list.map((node) => {
			const p = path.resolve(dir, `${node.number}.md`);
			const labels = node.labels.nodes.map(({ name }) => name);
			const labelsString = labels.length ? `labels:\n  - ${labels.join('\n  - ')}` : '';
			const description = node.bodyText.trim().split('\n')[0];
			const content = `---
title: "${node.title}"
createdAt: "${node.createdAt}"
${node.lastEditedAt ? `lastEditedAt: "${node.lastEditedAt}"` : ``}
discussionNumber: ${node.number}
originalUrl: "${node.url}"
${labelsString}
layout: false
description: "${description}"
---
${node.body}
	`;
			return promises.writeFile(p, content);
		})
	);
};

export const writePages = async (list) => {
	const dir = path.join('./src/routes');
	mkdirSync(dir, { recursive: true });
	await Promise.all(
		list.map(({ title, body }) => {
			const p = path.resolve(dir, `${title.toLowerCase()}.md`);
			return promises.writeFile(p, body);
		})
	);
};

export const writeEnv = async (config, pages) => {
	config.PAGES = pages.map(({ title }) => title).join(',');
	const content = Object.entries(config)
		.map(([key, value]) => `VITE_${key}=${value}`)
		.join('\n');
	return promises.writeFile('./.env.local', content);
};

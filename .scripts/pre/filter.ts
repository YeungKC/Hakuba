import dotenv from 'dotenv';
import { DiscussionsType } from './types';
dotenv.config();

const configCategoryName = process.env.CONFIG_CATEGORY || 'Config';
const postCategoryName = process.env.POST_CATEGORY || 'Post';

export const findConfig = (list: DiscussionsType[]) => {
	const configText = list.find(
		(e) => e.category.name === configCategoryName && e.title === 'index'
	)?.body;

	if (!configText) return {};

	return dotenv.parse(configText);
};

export const filterPage = (list: DiscussionsType[]) => {
	const pages = list.filter((e) => e.category.name === configCategoryName && e.title !== 'index');
	console.log(`filtered pages: ${pages.map(({ title }) => title).join(', ')}`);
	return pages;
};

export const filterPost = (list: DiscussionsType[]) => {
	const posts = list.filter((e) => e.category.name === postCategoryName);
	console.log(`filtered posts: ${posts.length}`);
	return posts;
};

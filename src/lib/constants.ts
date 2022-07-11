import type Post from './types/post';

export const HAKUBA_GITHUB_URL = 'https://github.com/YeungKC/Hakuba';

const env = import.meta.env;

export const USER_NAME = env.VITE_NAME;
export const GITHUB_URL = env.VITE_GITHUB_URL;

// Configurable
export const PAGE_SIZE = env.VITE_PAGE_SIZE || 10;
export const BLOG_NAME = env.VITE_BLOG_NAME;
export const BIO = env.VITE_BIO || env.VITE_DESCRIPTION;
export const EMAIL = env.VITE_EMAIL;
export const TWITTER = env.VITE_TWITTER;
export const DOMAIN = env.VITE_DOMAIN;
export const DESCRIPTION = env.VITE_DESCRIPTION || env.VITE_BIO;
export const KEYWORDS = env.VITE_KEYWORDS;
export const REPOSITORY = env.VITE_REPOSITORY;

export const PAGES = (JSON.parse(env.VITE_PAGES) as string[])
	.filter((name) => name && name !== '__error')
	.map((name) => ({
		name,
		href: `/${name.toLowerCase()}`
	}));

export const POSTS = JSON.parse(env.VITE_POSTS) as Post[];
export const REPOSITORY_URL = `https://github.com/${USER_NAME}/${REPOSITORY}`;
export const REPOSITORY_ISSUES_URL = `${REPOSITORY_URL}/issues`;

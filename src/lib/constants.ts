export const pageSize = 10;

const env = import.meta.env;

export const USER_NAME = env.VITE_NAME;
export const BLOG_NAME = env.VITE_BLOG_NAME;
export const BIO = env.VITE_BIO;
export const EMAIL = env.VITE_EMAIL;
export const TWITTER = env.VITE_TWITTER;
export const GITHUB_URL = env.VITE_GITHUB_URL;
export const DOMAIN = env.VITE_DOMAIN;
export const PAGES = (env.VITE_PAGES.split(',') as string[])
	.filter((name) => name && name !== '__error')
	.map((name) => ({
		name,
		href: `/${name.toLowerCase()}`
	}));

export const REPOSITORY_URL = `https://github.com/${USER_NAME}/${env.VITE_REPOSITORY}`;
export const REPOSITORY_ISSUES_URL = `${REPOSITORY_URL}/issues`;

export const HAKUBA_GITHUB_URL = 'https://github.com/YeungKC/Hakuba';
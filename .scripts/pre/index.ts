import dotenv from 'dotenv';
import Post from '../../src/lib/types/post.js';
import { fetchUser, fetchAllDiscussions } from './fetcher.js';
import { findConfig, filterPage, filterPost } from './filter.js';
import { writePosts, writePages, writeEnv } from './writer.js';

dotenv.config();
const env = process.env;

const { login: user, url: githubUrl, bio } = await fetchUser();
const list = await fetchAllDiscussions(user);

const config = findConfig(list);

config.NAME = user;
config.BLOG_NAME = config.BLOG_NAME || env.BLOG_NAME || `${user}'s Blog`;
config.BIO = config.BIO || env.BIO || bio;
config.GITHUB_URL = githubUrl;
config.REPOSITORY = env.REPOSITORY!;

const pages = filterPage(list);
const posts = filterPost(list);

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

console.log(`writing...`);

await writePosts(posts);
await writePages(pages);
await writeEnv(config);

console.log(`done`);

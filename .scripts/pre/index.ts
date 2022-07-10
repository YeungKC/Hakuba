import dotenv from 'dotenv';
import { fetchUser, fetchAllDiscussions } from './fetcher.js';
import { findConfig, filterPage, filterPost } from './filter.js';
import { writePosts, writePages, writeEnv } from './writer.js';

dotenv.config();

const { login: user, url: githubUrl, bio } = await fetchUser();
const list = await fetchAllDiscussions(user);

const config = findConfig(list);

config.NAME = user;
config.BLOG_NAME = config.BLOG_NAME || `${user}'s Blog`;
config.BIO = config.BIO || bio;
config.GITHUB_URL = githubUrl;
config.REPOSITORY = process.env.REPOSITORY!;

const pages = filterPage(list);
const posts = filterPost(list);

console.log(`writing...`);

await writePosts(posts);
await writePages(pages);
await writeEnv(config, pages, posts);

console.log(`done`);

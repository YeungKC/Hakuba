import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { DiscussionsType, FetchDiscussionsType, FetchViewerType } from './types';

dotenv.config();

const fetchData = async <T>(query: string) => {
	const res = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `bearer ${process.env.GITHUB_TOKEN}`
		},
		body: JSON.stringify({ query })
	});

	const json: any = await res.json();

	if (json.errors) {
		throw new Error(JSON.stringify(json.errors, null, 2));
	}

	return json.data as T;
};

export const fetchUser = async () => {
	console.log('fetching... user');
	const user = (
		await fetchData<FetchViewerType>(`
{
	viewer {
		login
		url
		bio
	}
}`)
	).viewer;
	console.log('user:', user.login);
	return user;
};

export const fetchDiscussions = async (owner: string, after?: string) => {
	console.log(`fetching discussions... endCursor: ${after}`);
	return (
		await fetchData<FetchDiscussionsType>(`
{
  repository(owner: "${owner}", name: "${process.env.REPOSITORY}") {
    discussions(first: 100, ${
			after ? `after: "${after}",` : ''
		} orderBy: {field: CREATED_AT, direction: DESC}) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        number
        title
        createdAt
		publishedAt
        lastEditedAt
        url
        body
		category {
			name
		}
        labels(first: 100) {
          nodes {
            name
            color
          }
        }
      }
    }
  }
}
`)
	).repository.discussions;
};

export const fetchAllDiscussions = async (user: string) => {
	let endCursor;
	let list: DiscussionsType[] = [];
	// eslint-disable-next-line no-constant-condition
	while (true) {
		const { nodes, pageInfo } = await fetchDiscussions(user, endCursor);
		list = list.concat(nodes);
		if (!pageInfo.hasNextPage) break;
		endCursor = pageInfo.endCursor;
	}

	console.log(`fetched ${list.length} discussions`);
	return list;
};

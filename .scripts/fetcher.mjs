import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const fetchData = async (query, variables) => {
	const res = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `bearer ${process.env.GITHUB_TOKEN}`
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

	const json = await res.json();

	if (json.errors) {
		throw new Error(JSON.stringify(json.errors, null, 2));
	}

	return json.data;
};

export const fetchUser = async () => {
	console.log('fetching... user');
	const user = (
		await fetchData(`
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

const fetchDiscussions = async (owner, after) => {
	console.log(`fetching discussions... endCursor: ${after}`);
	return (
		await fetchData(`
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
        lastEditedAt
        url
        body
		bodyText
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

export const fetchAllDiscussions = async (user) => {
	let endCursor;
	let list = [];
	// eslint-disable-next-line no-constant-condition
	while (true) {
		const { nodes, pageInfo } = await fetchDiscussions(user, endCursor);
		list = list.concat(nodes);
		endCursor = pageInfo.hasNextPage ? pageInfo.endCursor : undefined;
		if (!endCursor) break;
	}

	console.log(`fetched ${list.length} discussions`);
	return list;
};

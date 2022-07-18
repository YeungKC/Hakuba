export interface FetchViewerType {
	viewer: {
		login: string;
		url: string;
		bio: string;
	};
}

export interface DiscussionsType {
	number: number;
	title: string;
	createdAt: string;
	publishedAt: string;
	lastEditedAt?: string;
	url: string;
	body: string;
	category: {
		name: string;
	};
	labels: {
		nodes: {
			name: string;
			color: string;
		}[];
	};
}

export interface PageInfo {
	hasNextPage: boolean;
	endCursor?: string;
}
export interface FetchDiscussionsType {
	repository: {
		discussions: {
			pageInfo: PageInfo;
			nodes: DiscussionsType[];
		};
	};
}

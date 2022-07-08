export default interface Post {
	title: string;
	createdAt: string;
	lastEditedAt?: string | null;
	labels?: string[];
	discussionNumber: number;
	originalUrl: string;
}

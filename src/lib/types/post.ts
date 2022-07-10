export default interface Post {
	title: string;
	published: string;
	updated?: string | null;
	number: number;
	url: string;
	labels?: { name: string; color: string }[];
	// todo
	// identifyPath?: string;
	excerpt?: string;
}

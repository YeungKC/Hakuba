export default interface BasePageType {
	// from github
	title: string;
	published: string;
	number: number;
	url: string;
	path?: string;
	updated?: string | null;

	// custom
	lang?: string;
	comment?: boolean;
	excerpt?: string;
}

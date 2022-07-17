export default interface BasePageType {
	// from github
	title: string;
	published: string;
	number: number;
	url: string;
	updated?: string | null;

	// custom
	path?: string;
	lang?: string;
	comment?: boolean;
	excerpt?: string;
}

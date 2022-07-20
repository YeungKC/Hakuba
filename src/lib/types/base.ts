export default interface BasePageType {
	// from github
	title: string;
	published: string;
	number: number;
	url: string;
	updated?: string;

	formattedOfPublished: string;
	formattedOfUpdated?: string;

	// custom
	path?: string;
	lang?: string;
	comment?: boolean;
	excerpt?: string;
}

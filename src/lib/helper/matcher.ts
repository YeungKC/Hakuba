import { match } from 'path-to-regexp';
export const generateMatcher = <P extends object = Record<string, string>>(param: string) => {
	const m = match<P>(param, { decode: decodeURIComponent });
	return (path: string) => {
		const result = m(path);
		if (!result) {
			return undefined;
		}
		return result.params;
	};
};

import type { ParamMatcher } from '@sveltejs/kit';
import { generateMatcher } from '$lib/helper/matcher';

const labelsMatcher = generateMatcher('labels/:label{/page/:page(\\d+)}?');
const indexMatcher = generateMatcher('{page/:page(\\d+)}?');

export const matcher = (param: string) => indexMatcher(param) || labelsMatcher(param);

export const match: ParamMatcher = (param) => {
	const result = matcher(param);
	if (result && !result?.page) return true;
	if (Number.parseInt(result?.page ?? '') <= 1) return false;
	return !!result;
};

import type BasePageType from './base';

export default interface Post extends BasePageType {
	labels?: { name: string; color: string }[];
	timezone?: string;
}

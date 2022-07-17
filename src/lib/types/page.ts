import type BasePageType from './base';

export default interface Page extends BasePageType {
	priority?: number;
}

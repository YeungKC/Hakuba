import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import YAML from 'yaml';
import { DiscussionsType } from './types';
import Post from '../../src/lib/types/post';
import Page from '../../src/lib/types/page';

dayjs.extend(utc);

const splitMdx = (mdx: string) => {
	const arr = mdx.split(/^(-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})/);
	if (arr.length === 1) return [mdx];
	const frontMatter = YAML.parse(arr[2].trim());
	return [arr[3], frontMatter];
};

export const convertFrontMatter = (list: DiscussionsType[], config: Record<string, string>) =>
	list.map((node) => {
		const [md, originalFrontMatter] = splitMdx(node.body);

		const format = (date: string | undefined) => {
			if (!date) return undefined;
			return dayjs(date)
				.utc()
				.utcOffset(Number.parseInt(config.UTC_OFFSET))
				.format(config.DATE_FORMAT);
		};

		const frontMatter: Page | Post = {
			number: node.number,
			title: node.title,
			published: node.publishedAt,
			updated: node.lastEditedAt,
			formattedOfPublished: format(node.publishedAt),
			formattedOfUpdated: format(node.lastEditedAt),
			url: node.url,
			labels: node.labels.nodes,
			...originalFrontMatter
		};

		const frontMatterText = `---\n${YAML.stringify(frontMatter)}---${
			originalFrontMatter ? '' : '\n'
		}`;

		return { ...node, body: `${frontMatterText}${md}` };
	});

import YAML from 'yaml';
import { DiscussionsType } from './types';

const splitMdx = (mdx: string) => {
	const arr = mdx.split(/^(-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})/);
	if (arr.length === 1) return [mdx];
	const frontMatter = YAML.parse(arr[2].trim());
	return [arr[3], frontMatter];
};

export const convertFrontMatter = (list: DiscussionsType[]) =>
	list.map((node) => {
		const [md, originalFrontMatter] = splitMdx(node.body);

		const frontMatter = {
			number: node.number,
			title: node.title,
			published: node.publishedAt,
			updated: node.lastEditedAt,
			url: node.url,
			labels: node.labels.nodes,
			...originalFrontMatter
		};

		const frontMatterText = `---\n${YAML.stringify(frontMatter)}---${
			originalFrontMatter ? '' : '\n'
		}`;

		return { ...node, body: `${frontMatterText}${md}` };
	});

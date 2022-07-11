<script lang="ts">
	import clsx from 'clsx';

	export let label: string | [string, number];
	export let selected: string | undefined = undefined;

	let count: number | undefined;
	$: {
		if (typeof label !== 'string') {
			[label, count] = label;
		}
	}
</script>

<a
	class={clsx('!font-normal', {
		underline: selected === label
	})}
	href={`/labels/${label}`}>#{label}{count ? `(${count})` : ''}</a
>

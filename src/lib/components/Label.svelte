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
	class={clsx('!font-normal', selected === label && 'underline')}
	href={selected === label || selected === label?.[0] ? '/' : `/label/${label}`}
	>#{label}{count ? `(${count})` : ''}</a
>

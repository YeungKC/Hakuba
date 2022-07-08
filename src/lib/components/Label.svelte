<script lang="ts">
	import classNames from 'classnames';

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
	class={classNames('!font-normal', {
		underline: selected === label
	})}
	href={`/labels/${label}`}>#{label}{count ? `(${count})` : ''}</a
>

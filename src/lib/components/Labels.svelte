<script lang="ts">
	import clsx from 'clsx';
	import Label from './Label.svelte';

	let labels: string[] | undefined | [string, number][] = undefined;
	let selected: string | undefined = undefined;
	let clazz: string | undefined = undefined;
	export { labels, selected, clazz as class };
</script>

{#if labels?.length}
	<div class={clsx('flex flex-row flex-wrap items-center gap-2', clazz)}>
		{#each labels ?? [] as label, index (typeof label === 'string' ? label : label?.[0])}
			<span>
				<Label {label} {selected} />{index === labels.length - 1 ? '' : ', '}
			</span>
		{/each}
	</div>
{/if}

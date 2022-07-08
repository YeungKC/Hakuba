<script lang="ts">
	import classNames from 'classnames';
	import Label from './Label.svelte';

	let labels: string[] | undefined | [string, number][] = undefined;
	let selected: string | undefined = undefined;
	let clazz: string | undefined = undefined;
	export { labels, selected, clazz as class };
</script>

{#if labels?.length}
	<div class={classNames('flex flex-row flex-wrap items-center gap-2', clazz)}>
		{#each labels ?? [] as label, index}
			<span>
				<Label {label} {selected} />{index === labels.length - 1 ? '' : ', '}
			</span>
		{/each}
	</div>
{/if}

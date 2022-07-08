<script lang="ts">
	import Labels from '$lib/components/Labels.svelte';

	export let labels: [string, number][];
	export let selected: string | undefined = undefined;
</script>

{#if labels.length}
	<h2 class="mt-10 mb-4 text-xl font-bold tracking-wide">Labels</h2>
{/if}

<Labels {labels} {selected} />

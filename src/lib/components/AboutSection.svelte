<script lang="ts">
	import Email from '$lib/components/Email.svelte';
	import Github from '$lib/components/Github.svelte';
	import Twitter from '$lib/components/Twitter.svelte';
	import { BIO, EMAIL, GITHUB_URL, TWITTER } from '$lib/constants';

	// todo specify type
	let components: unknown[] = [];

	GITHUB_URL && components.push(Github);
	TWITTER && components.push(Twitter);
	EMAIL && components.push(Email);
</script>

<section class="mt-4 flex flex-col gap-4">
	<p>{BIO}</p>
	{#if components.length}
		<p class="flex flex-row items-center gap-1">
			Find me on {#each components as component, index (component)}
				<svelte:component this={component} />
				{index < components.length - 2 ? ', ' : ''}
				{index === components.length - 2 ? ' and ' : ''}
			{/each}
			.
		</p>
	{/if}
</section>

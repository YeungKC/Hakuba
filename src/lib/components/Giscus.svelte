<script lang="ts">
	import Giscus from '@giscus/svelte';
	import { COMMENT, REPOSITORY, USER_NAME } from '$lib/constants';

	export let config: { number: number; comment?: boolean };
</script>

{#if config.comment ?? COMMENT}
	<div class="h-16" />

	<Giscus
		repo={`${USER_NAME}/${REPOSITORY}`}
		repoId=""
		mapping="number"
		term={`${config.number}`}
		reactionsEnabled="1"
		emitMetadata="0"
		inputPosition="top"
		theme="light"
		lang="en"
		loading="lazy"
	/>
{/if}

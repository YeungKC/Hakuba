<script lang="ts">
	import { readableDate } from '$lib/helper/readableDate';
	import type Post from '$lib/types/post';

	export let posts: Post[];
	export let showTitle = true;
</script>

{#if showTitle && posts.length}
	<h2 class="mt-10 mb-4 text-xl font-bold tracking-wide">Posts</h2>
{/if}
<ul class="flex flex-col gap-2">
	{#each posts as post}
		<li class="flex flex-row items-center gap-6">
			<div class="shrink-0 text-slate-500">{readableDate(post.published)}</div>
			<a sveltekit:prefetch class="truncate underline" href={`/posts/${post.number}`}
				>{post.title}</a
			>
		</li>
	{/each}
</ul>

<script lang="ts">
	import { HAKUBA_GITHUB_URL } from '../constants';
	import Nav from './Nav.svelte';
	import type Page from '$lib/types/page';

	export let pages: Page[];
</script>

<footer
	class="mb-5 mt-12 flex flex-col-reverse items-center justify-between gap-3 text-xs leading-5 text-slate-600 sm:flex-row [&_a]:underline"
>
	<div>Powered by <a href={HAKUBA_GITHUB_URL}>Hakuba</a></div>
	<Nav class="text-xs" {pages} />
</footer>

<script lang="ts">
	import { BLOG_NAME } from '$lib/constants';
	import type Page from '../types/page';
	import Header from './Header.svelte';
	import Nav from './Nav.svelte';

	export let pages: Page[];
</script>

<header class="mb-8">
	<a sveltekit:prefetch href="/" class="inline-block"><Header>{BLOG_NAME}</Header></a>
	<Nav {pages} class="divide-slate-600 text-slate-600" />
</header>

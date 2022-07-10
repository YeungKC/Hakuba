<script>
	import { BLOG_NAME } from '$lib/constants';

	import Header from './Header.svelte';
	import Nav from './Nav.svelte';
</script>

<header class="mb-8">
	<a sveltekit:prefetch href="/" class="inline-block"><Header>{BLOG_NAME}</Header></a>

	<Nav class="divide-slate-600 text-slate-600" />
</header>

<script>
	import { HAKUBA_GITHUB_URL } from '../constants';

	import Nav from './Nav.svelte';
</script>

<footer
	class="mb-5 mt-12 flex flex-row flex-wrap justify-between text-xs leading-5 text-slate-600 [&_a]:underline"
>
	<div class="mr-5">Powered by <a href={HAKUBA_GITHUB_URL}>Hakuba</a></div>
	<Nav class="text-xs" />
</footer>

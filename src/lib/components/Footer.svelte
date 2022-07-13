<script>
	import { HAKUBA_GITHUB_URL } from '../constants';

	import Nav from './Nav.svelte';
</script>

<footer
	class="mb-5 mt-12 flex flex-col-reverse gap-3 justify-between items-center sm:flex-row text-xs leading-5 text-slate-600 [&_a]:underline"
>
	<div>Powered by <a href={HAKUBA_GITHUB_URL}>Hakuba</a></div>
	<Nav class="text-xs" />
</footer>

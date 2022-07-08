<script>
	import '../app.css';
	import '../code.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="flex flex-grow flex-col">
	<slot />
</main>

<Footer />

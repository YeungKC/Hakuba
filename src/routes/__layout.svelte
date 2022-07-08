<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import HomeHeader from '$lib/components/HomeHeader.svelte';
</script>

<HomeHeader />

<main class="flex flex-grow flex-col">
	<slot />
</main>

<Footer />

<script lang="ts">
	export let lang: string | undefined = undefined;
</script>

<article class="prose prose-slate prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg" {lang}>
	<slot />
</article>

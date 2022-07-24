<script lang="ts">
	import '../../code.css';
	export let lang: string | undefined = undefined;
</script>

<article
	class="prose-slate prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg  prose-table:block prose-table:w-max prose-table:max-w-full prose-table:overflow-auto"
	{lang}
>
	<slot />
</article>

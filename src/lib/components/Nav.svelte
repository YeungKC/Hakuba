<script lang="ts">
	import classname from 'clsx';
	import { DOMAIN, PAGES } from '$lib/constants';
	let clazz: string | undefined = undefined;
	export { clazz as class };
</script>

<nav>
	<ul
		class={classname(
			'flex flex-row divide-x leading-4 divide-dotted child:px-1 first:child:pl-0 last:child:pr-0 [&_a]:py-4 [&_a]:px-2 -ml-2',
			clazz
		)}
	>
		{#each [{ name: 'Hemo', href: '/' }, ...PAGES] as { name, href }}
			<li>
				<a sveltekit:prefetch {href}>{name}</a>
			</li>
		{/each}
		{#if DOMAIN}
			<li>
				<a sveltekit:prefetch target="_blank" href="/atom.xml">Feed</a>
			</li>
		{/if}
	</ul>
</nav>

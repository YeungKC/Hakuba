<script lang="ts">
	import classname from 'classnames';
	import { PAGES } from '$lib/constants';
	let clazz: string | undefined = undefined;
	export { clazz as class };
</script>

<nav>
	<ul
		class={classname(
			'flex flex-row divide-x leading-4 divide-dotted child:px-4 first:child:pl-0 last:child:pr-0',
			clazz
		)}
	>
		{#each [{ name: 'Hemo', href: '/' }, ...PAGES] as { name, href }}
			<li>
				<a sveltekit:prefetch {href}>{name}</a>
			</li>
		{/each}
	</ul>
</nav>

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
		<li>
			<a href="/">Home</a>
		</li>
		{#each PAGES as { name, href }}
			<li>
				<a {href}>{name}</a>
			</li>
		{/each}

		<!-- <li>
			<a href="/feed">Feed</a>
		</li> -->
	</ul>
</nav>

<script lang="ts">
	import clsx from 'clsx';

	let clazz: string | undefined = undefined;
	export { clazz as class };
</script>

<h1 class={clsx('m-0 text-2xl font-bold leading-9 tracking-wide', clazz)}>
	<slot />
</h1>

<script lang="ts">
	import classNames from 'classnames';

	let clazz: string | undefined = undefined;
	export { clazz as class };
</script>

<h1 class={classNames('m-0 text-2xl font-bold leading-9 tracking-wide', clazz)}>
	<slot />
</h1>

<script lang="ts">
	import clsx from 'clsx';
	import chevronLeft from '@fortawesome/fontawesome-free/svgs/solid/chevron-left.svg';
	import chevronRight from '@fortawesome/fontawesome-free/svgs/solid/chevron-right.svg';

	const build = (current: number, total: number) => {
		if (total === 0) return [];

		let arr: (string | number)[] = Array.from({ length: 3 }, (_, i) => i + current - 1).filter(
			(e) => e > 0 && e <= total
		);

		if (arr[0] > 2) {
			arr = [1, '...', ...arr];
		} else if (arr[0] !== 1) {
			arr = [1, ...arr];
		}

		if (arr[arr.length - 1] < total - 1) {
			arr = [...arr, '...', total];
		} else if (arr[arr.length - 1] !== total) {
			arr = [...arr, total];
		}

		if (arr.length === 1) return [];

		return arr;
	};

	export let currentPage = 1;
	export let pageSize = 10;
	export let totalCount: number;
	export let basePath: string;

	$: totalPages = Math.ceil(totalCount / pageSize);
	$: array = build(currentPage, totalPages);
	$: hasNext = totalPages > 0 && currentPage !== totalPages;
	$: hasPrev = currentPage > 1;

	const to = (index: number) => {
		if (index === 1) return '/';
		return `${basePath}${index}`;
	};
</script>

<nav class="mt-8 flex flex-row items-center gap-1 self-center child:p-2">
	{#if hasPrev}
		<a sveltekit:prefetch href={to(currentPage - 1)}>
			<img src={chevronLeft} alt="Previous" width="6" height="6" />
		</a>
	{/if}
	{#each array as e (e)}
		{#if typeof e === 'string'}
			<span>...</span>
		{/if}
		{#if typeof e === 'number'}
			<a sveltekit:prefetch href={to(e)}>
				<span class={clsx('border-b border-transparent', currentPage === e && 'border-slate-900')}>
					{e}
				</span>
			</a>
		{/if}
	{/each}
	{#if hasNext}
		<a sveltekit:prefetch href={to(currentPage + 1)}>
			<img src={chevronRight} alt="Next" width="6" height="6" />
		</a>
	{/if}
</nav>

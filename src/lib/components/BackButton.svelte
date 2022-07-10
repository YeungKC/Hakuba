<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<button
	on:click={() => goto('/')}
	class="absolute left-0 top-0 -ml-4 -translate-y-3/4 self-start px-4 py-3 text-xs font-semibold opacity-0 transition group-hover:opacity-100"
	>POSTS /</button
>

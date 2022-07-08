<script lang="ts">
	import twitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg';
	import { TWITTER } from '$lib/constants';
	const href = `https://twitter.com/${TWITTER}`;
</script>

<a target="_blank" rel="noopener" {href}>
	<img src={twitter} alt="Twitter" width="14" height="14" />
</a>

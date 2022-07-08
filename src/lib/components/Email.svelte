<script lang="ts">
	import email from '@fortawesome/fontawesome-free/svgs/solid/envelope.svg';
	import { EMAIL } from '$lib/constants';
</script>

<a target="_blank" rel="noopener" href={`mailto:${EMAIL}`}>
	<img src={email} alt="Email" width="14" height="14" />
</a>

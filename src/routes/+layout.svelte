<script>
	import { LazyCSSProvider } from '@master/css.svelte';
	const loadConfig = import('../master.css');
</script>

<LazyCSSProvider config={loadConfig}>
	<div class="app"><slot /></div>
</LazyCSSProvider>

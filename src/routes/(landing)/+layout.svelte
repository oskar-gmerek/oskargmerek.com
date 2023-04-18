<script lang="ts">
	import LangSelect from '$lib/components/Langs/LangSelect.svelte';
	import { getTolgee } from '@tolgee/svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const tolgeeLang = getTolgee();
	if (data.lang !== $tolgeeLang.getLanguage()) {
		console.log('ITS NOT THE SAME!');
	}
	console.log('test trst');
</script>

<LangSelect />

<div class="app max-w:lg m:auto mt:150@xs bg:rgb(23,33,45) fg:white p:60">
	<slot />
</div>

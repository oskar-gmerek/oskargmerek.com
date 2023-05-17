<script lang="ts">
	import type { navLink, navLinks } from '$lib/types/navLinks';
	import Logo from '$lib/components/Monogram.svelte';
	import LangSelect from '$lib/components/LangSelect.svelte';
	import { getTranslate } from '@tolgee/svelte';
	import Button from './button/Button.svelte';
	const { t } = getTranslate();

	export let items: navLinks = [];
</script>

<div class="fixed top:0 w:full z:100">
	<nav class="flex m:auto max-w:lg bg:background ai:center py:10">
		<a href="/" title="web developer portfolio"
			><Logo class="h:70 p:10 fill:orange b:green|2|2" /></a
		>
		<div class=""><LangSelect /></div>
		<div class="flex ai:center">
			{#each items as item}
				<Button
					mcss="py:6! bg:transparent! fg:#fff! bg:orange!:hover"
					href={item.href}
					title={item.title}>{item.label}</Button
				>
			{/each}
		</div>
	</nav>
</div>

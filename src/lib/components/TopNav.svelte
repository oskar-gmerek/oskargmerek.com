<script lang="ts">
	import type { navLinks } from '$lib/types/navLinks';
	import Logo from '$lib/components/Monogram.svelte';
	import LangSelect from '$lib/components/LangSelect.svelte';
	import Button from './button/Button.svelte';
	import LinkedIn from '$lib/vectors/social/LinkedIn.svelte';
	import GitHub from '$lib/vectors/social/GitHub.svelte';
	import { getTranslate } from '@tolgee/svelte';

	export let items: navLinks = [];

	const { t } = getTranslate();
</script>

<div class="fixed top:0 w:full z:100">
	<nav class="flex m:auto max-w:lg bg:background ai:center py:10 bg:green jc:space-between">
		<div class="flex ai:center">
			<a href="/" title={$t('monogram_title')} aria-label={$t('monogram_aria_label')}
				><Logo class="h:70 p:10 fill:orange b:green|2|2" /></a
			>
			<div class="mr:5"><LangSelect /></div>
			<div class="flex ai:center">
				{#each items as item}
					<Button
						mcss="py:6! bg:transparent! fg:#fff! bg:orange!:hover"
						href={item.href}
						title={item.title}>{item.label}</Button
					>
				{/each}
			</div>
		</div>
		<div class="hidden flex@sm mr:30 gap:5">
			<a href="https://github.com/oskar-gmerek/oskargmerek.com" title={$t('gh_title')}>
				<GitHub class="fill:white fill:orange:hover" />
			</a>
			<a href="https://www.linkedin.com/in/oskar-gmerek" title={$t('li_title')}>
				<LinkedIn class="fill:white fill:orange:hover" />
			</a>
		</div>
	</nav>
</div>

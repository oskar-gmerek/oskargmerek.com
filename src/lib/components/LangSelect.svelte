<script lang="ts">
	import { goto } from '$app/navigation';
	import { getTolgee } from '@tolgee/svelte';
	import { languages } from '$lib/i18n/locales';
	import { browser } from '$app/environment';
	import Select from './select/Select.svelte';
	const tolgee = getTolgee(['language']);

	let value = $tolgee.getLanguage();

	function handleLanguageChange() {
		if (browser) {
			document.querySelector('html')?.setAttribute('lang', value || 'en');
		}
		if (value == undefined) {
			$tolgee.changeLanguage($tolgee.getLanguage() || 'en');
		} else {
			$tolgee.changeLanguage(value);
		}
		if (value == 'en') {
			goto('/');
		} else {
			goto('/' + value);
		}
	}

	const langs = Object.entries(languages).map(([label, value]) => ({ label, value }));
</script>

<Select
	bind:value
	on:change={() => handleLanguageChange()}
	name="chooseLanguage"
	mcss="py:4 "
	containerStyle="mt:0! mb:0! min-w:max"
>
	<svelte:fragment slot="options">
		{#each langs as lang}
			<option value={lang.label}>{lang.value}</option>
		{/each}
	</svelte:fragment>
</Select>

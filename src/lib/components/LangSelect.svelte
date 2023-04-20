<script lang="ts">
	import { goto } from '$app/navigation';
	import { getTolgee } from '@tolgee/svelte';
	import { languages } from '$lib/i18n/locales';
	import { browser } from '$app/environment';
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

	const langs = Object.entries(languages);
</script>

<select bind:value on:change={handleLanguageChange}>
	{#each langs as [code, lang]}
		<option value={code}>{lang}</option>
	{/each}
</select>

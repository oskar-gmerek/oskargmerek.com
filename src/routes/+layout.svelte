<script lang="ts">
	import { LazyCSSProvider } from '@master/css.svelte';
	import '@master/normal.css';
	import {
		TolgeeProvider,
		Tolgee,
		DevTools,
		FormatSimple,
		LanguageStorage,
		LanguageDetector
	} from '@tolgee/svelte';
	import { languages, defaultLang } from '$lib/helpers/locales';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const loadConfig = import('../master.css');
	const tolgee = Tolgee()
		.use(DevTools())
		.use(FormatSimple())
		.use(LanguageStorage())
		.use(LanguageDetector())
		.init({
			language: data.lang ? data.lang : defaultLang,
			staticData: {
				[data.lang]: data.langData
			},
			defaultLanguage: data.lang ? data.lang : defaultLang,
			availableLanguages: Object.keys(languages),
			apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
			apiKey: import.meta.env.VITE_TOLGEE_API_KEY
		});
</script>

<LazyCSSProvider config={loadConfig}>
	<TolgeeProvider {tolgee}>
		<div slot="fallback" class="m:auto fg:orange-70">Loading translations...</div>
		<slot />
	</TolgeeProvider>
</LazyCSSProvider>

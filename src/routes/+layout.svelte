<script lang="ts">
	import { LazyCSSProvider } from '@master/css.svelte';
	import '@master/normal.css';
	import {
		TolgeeProvider,
		Tolgee,
		DevTools,
		LanguageStorage,
		LanguageDetector
	} from '@tolgee/svelte';
	import { FormatIcu } from '@tolgee/format-icu';
	import { languages, defaultLang } from '$lib/i18n/locales';
	import type { LayoutData } from './$types';
	import { inject } from '@vercel/analytics';
	import * as englishLang from '$lib/i18n/en.json';
	import * as polishLang from '$lib/i18n/pl.json';

	export let data: LayoutData;

	const loadConfig = import('../master.css');
	const tolgee = Tolgee()
		.use(DevTools())
		.use(FormatIcu())
		.use(LanguageStorage())
		.use(LanguageDetector())
		.init({
			language: data.lang ? data.lang : defaultLang,

			staticData: {
				en: englishLang,
				pl: polishLang
			},
			defaultLanguage: data.lang ? data.lang : defaultLang,
			availableLanguages: Object.keys(languages),
			apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
			apiKey: import.meta.env.VITE_TOLGEE_API_KEY
		});

	// Vercel Analytics injection
	inject();
</script>

<LazyCSSProvider config={loadConfig}>
	<TolgeeProvider {tolgee}>
		<div slot="fallback" class="m:auto fg:orange-70">Loading translations...</div>
		<div class="fg:white caret-color:orange accent-color:orange">
			<slot />
		</div>
	</TolgeeProvider>
</LazyCSSProvider>

<style>
	@font-face {
		font-family: 'Ubuntu';
		src: local('Ubuntu-Bold'), local('UbuntuBold'), local('Ubuntu Bold'),
			local('Ubuntu-VariableFont'), local('Ubuntu-Variable') url('/fonts/ubuntu/Ubuntu-Bold.woff2');
		src: url('/fonts/ubuntu/Ubuntu-Bold.woff2');
		font-weight: 700;
		font-display: optional;
	}
	@font-face {
		font-family: 'Open Sans';
		src: local('OpenSans-Regular'), local('OpenSans'), local('Open-Sans'), local('OpenSans Regular'),
			local('Open Sans Regular'), local('OpenSansRegular'), local('OpenSans-VariableFont_wdth,wght'),
			local('OpenSans-VariableFont'), url('/fonts/opensans/OpenSans-Regular.woff2');
		src: url('/fonts/opensans/OpenSans-Regular.woff2');
		font-weight: 400;
		font-display: optional;
	}
	@font-face {
		font-family: 'Open Sans-fallback';
		size-adjust: 105.40000000000003%;
		ascent-override: 107%;
		src: local('Arial');
		font-display: optional;
		font-weight: 400;
	}
	@font-face {
		font-family: 'Ubuntu-fallback';
		size-adjust: 102.19999999999999%;
		ascent-override: 87%;
		src: local('Arial');
		font-display: optional;
		font-weight: 700;
	}
	:global(html) {
		background-color: rgb(32, 44, 59);
	}
	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Ubuntu', 'Ubuntu-fallback', sans-serif;
		font-weight: 700;
	}
	:global(body:not(h1, h2, h3, h4, h5, h6)) {
		font-family: 'Open Sans', 'Open Sans-fallback', sans-serif;
		font-weight: 400;
	}
</style>

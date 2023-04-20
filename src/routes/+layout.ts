import { error } from '@sveltejs/kit';
import { languages } from '$lib/i18n/locales';
import type { LayoutLoad } from './$types';

export const load = (async ({ params: { lang = 'en' } }) => {
	if (Object.keys(languages).includes(lang)) {
		return {
			langData: await import(`$lib/i18n/${lang}.json`).then((translations) => translations),
			lang: lang
		};
	} else {
		throw error(404, 'Language not supported yet.');
	}
}) satisfies LayoutLoad;

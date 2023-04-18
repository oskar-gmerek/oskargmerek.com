import { error } from '@sveltejs/kit';
import { languages } from '$lib/helpers/locales';

export const load = async ({ params: { lang = 'en' } }) => {
	console.log('lang: ' + lang);
	console.log('lang obj: ' + Object.keys(languages));
	console.log('lang include: ' + Object.keys(languages).includes(lang));
	if (Object.keys(languages).includes(lang)) {
		return {
			langData: await import(`$lib/i18n/${lang}.json`).then((translations) => translations),
			lang: lang
		};
	} else {
		throw error(404, 'Language not supported yet.');
	}
};

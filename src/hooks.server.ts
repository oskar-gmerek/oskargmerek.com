import type { Handle } from '@sveltejs/kit';
import { renderIntoHTML } from '@master/css';
import { config } from './master.css';
import { sequence } from '@sveltejs/kit/hooks';
import { defaultLang, languages } from '$lib/i18n/locales';

const handleLang = (async ({ event, resolve }) => {
	const langArray = Object.entries(languages).map(([label]) => label);
	const [, lang, ...rest] = event.url.pathname.split('/');
	if (lang === defaultLang && event.url.pathname !== '/') {
		// If default language is in the url path, remove it
		return new Response('Redirect', {
			status: 303,
			headers: { Location: `/${rest}` }
		});
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', langArray.includes(lang) ? lang : 'en')
	});
}) satisfies Handle;

const handleMasterCSS = (async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => renderIntoHTML(html, config)
	});
}) satisfies Handle;

export const handle = sequence(handleMasterCSS, handleLang);

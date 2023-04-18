import type { Handle } from '@sveltejs/kit';
import { renderIntoHTML } from '@master/css';
import { config } from './master.css';
import { sequence } from '@sveltejs/kit/hooks';
import { defaultLang } from '$lib/helpers/locales';

const handleLang = (async ({ event, resolve }) => {
	const [, lang] = event.url.pathname.split('/');
	if (lang === defaultLang && event.url.pathname !== '/') {
		return new Response('Redirect', {
			status: 303,
			headers: { Location: `/` }
		});
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang || 'en')
	});
}) satisfies Handle;

const handleMasterCSS = (async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => renderIntoHTML(html, config)
	});
}) satisfies Handle;

export const handle = sequence(handleMasterCSS, handleLang);

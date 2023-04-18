// import type { Handle } from "@sveltejs/kit";

// export const handle = (({ event: NavigationEvent, resolve }) => {
//     const lang = event.
// 	return resolve(event, {
// 		transformPageChunk: ({ html }) => html.replace('%lang%', lang === '' ? 'en' : lang)
// 	});
// });
import { defaultLang } from '$lib/helpers/locales';
const handleLang = async ({ event, resolve }) => {
	const [, lang] = event.url.pathname.split('/');
	console.log('[lang]: ' + lang);
	const langTag = lang === '' ? 'en' : lang;
	if (lang === defaultLang && event.url.pathname !== '/') {
		return new Response('Redirect', {
			status: 303,
			headers: { Location: `/` }
		});
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', langTag)
	});
};

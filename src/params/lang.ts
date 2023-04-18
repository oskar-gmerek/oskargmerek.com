import type { ParamMatcher } from '@sveltejs/kit';
import { languages } from '$lib/helpers/locales';

export const match = ((param) => {
	// const regex = new RegExp('([' + Object.keys(languages).join('|') + ']){2|5}');
	const regex = new RegExp('([a-z]{2}(-[a-zA-Z]{2})?)');
	return regex.test(param);
}) satisfies ParamMatcher;

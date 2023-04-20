import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
	const regex = new RegExp('([a-z]{2}(-[a-zA-Z]{2})?)');
	return regex.test(param);
}) satisfies ParamMatcher;

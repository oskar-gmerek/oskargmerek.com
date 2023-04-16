import { renderIntoHTML } from '@master/css';
import { config } from '../master.css';
import type { Handle } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
	return (await resolve(event, {
		transformPageChunk: ({ html }) => renderIntoHTML(html, config)
	})) satisfies Handle;
}

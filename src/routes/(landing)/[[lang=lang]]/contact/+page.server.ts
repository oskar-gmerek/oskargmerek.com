import type { Actions } from './$types';
import sendEmail from '$lib/server/sendEmail';

type ContactForm = {
	emailSubject: string;
	emailMessage: string;
	website: string;
	subjectOptions: string;
};

export const actions = {
	default: async (event) => {
		const data = Object.fromEntries(await event.request.formData()) as ContactForm;

		await sendEmail(data.emailSubject, data.emailMessage);
	}
} satisfies Actions;

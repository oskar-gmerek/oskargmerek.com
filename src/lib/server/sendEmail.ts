import { env } from '$env/dynamic/private';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

const senderEmail = env.VITE_EMAIL_FROM;
const recipientEmail = env.VITE_EMAIL_TO;

async function sendEmail(
	emailSubject: string,
	emailBody: string,
	emailTo?: string,
	nameTo?: string,
	nameFrom?: string,
	emailFrom?: string
) {
	const mailerSend = new MailerSend({
		apiKey: env.VITE_MAILERSEND_API_KEY
	});

	const sentFrom = new Sender(
		emailFrom || senderEmail,
		nameFrom || 'Contact form at oskargmerek.com'
	);

	const recipients = [new Recipient(emailTo || recipientEmail, nameTo || 'Oskar Gmerek')];

	let subject = '';

	switch (emailSubject) {
		case 'web_dev':
			subject = '∞ Web development inquiry❗️ ∞';
			break;
		case 'job_offer':
			subject = '∞ Job Offer❗️ ∞';
			break;
		case 'partnership':
			subject = '∞ Business Partnership inquiry❗️ ∞';
			break;
		case 'collaboration':
			subject = '∞ Collaboration inquiry❗️ ∞';
			break;
		case 'investment':
			subject = '∞ Investment inquiry❗️ ∞';
			break;
		default:
			subject = '∞ Someone wants to connect❗️ ∞';
			break;
	}

	const emailParams = new EmailParams()
		.setFrom(sentFrom)
		.setTo(recipients)
		.setReplyTo(sentFrom)
		.setSubject(subject)
		.setHtml(`<div class="background:red color:white">${emailBody}</div>`)
		.setText(emailBody);

	try {
		await mailerSend.email.send(emailParams);
	} catch (err) {
		const error = err as Error;
		throw Error(error.message);
	}
	return { status: 'success' };
}

export default sendEmail;

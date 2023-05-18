import type { Actions } from './$types';
import type { ContactForm } from '$lib/types/contact';
import { fail } from '@sveltejs/kit';
import sendEmail from '$lib/server/sendEmail';

export const actions = {
	default: async (event) => {
		const data = Object.fromEntries(await event.request.formData()) as ContactForm;
		if (!data.fullName) {
			return fail(400, {
				error: {
					field: 'fullName'
				}
			});
		}

		if (!data.emailAddress && !data.mobileNumber && !data.otherContact) {
			return fail(400, {
				error: {
					field: 'contact'
				}
			});
		}

		const contactBody = `<br />
			<hr><br />
			<h2>Contact Details</h2>
			<br />Full Name: <b>${data.fullName}</b>
			${
				data.emailAddress
					? `<br />Email Address: <a href="mailto:${data.emailAddress}"><b>${data.emailAddress}</b></a>`
					: ''
			} 
			${
				data.mobileNumber
					? `<br />Mobile Number: <a href="tel:${data.mobileNumber}"><b>${data.mobileNumber}</b></a>`
					: ''
			}
			${
				data.otherContact
					? `<br />Other Contacts: <br /> <b>${data.otherContact.replace(/\n/g, '<br />')}</b>
					 <br /><br />`
					: ''
			}
			<hr><br />
		`;

		let emailBody = '';

		if (data.emailSubject === 'web_dev') {
			emailBody = `
			<h1 style="background-color:red; color:white; text-align:center; padding:10px">Web development opportunity from <br />${
				data.fullName
			}</h1><br />
			<hr><br />
			${data.projectName ? `<br />Project Name: <b>${data.projectName}</b>` : ''}
			${
				data.projectDetails
					? `<br />Project Details: <br /><b>${data.projectDetails.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			${data.budget ? `<br />Budget: <b>${data.budget}</b>` : ''}
			${data.deadline ? `<br />Deadline: <b>${data.deadline}</b>` : ''}
			${
				data.additionalRequirements
					? `<br />Additional Requirements: <br /><b>${data.additionalRequirements.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			
			${contactBody}
			
			`;
		} else if (data.emailSubject === 'job_offer') {
			emailBody = `
			<h1 style="background-color:red; color:white; text-align:center; padding:10px">Job offer from <br />${
				data.companyName ? data.companyName : data.fullName
			}</h1><br />
			<hr><br />
			${data.companyName ? `<br />Company Name: <b>${data.companyName}</b>` : ''}
			${data.website ? `<br />Company Website: <a href="${data.website}"><b>${data.website}</b></a>` : ''}
			${data.workPosition ? `<br />Position: <b>${data.workPosition}</b>` : ''}
			${
				data.jobDescription
					? `<br />Job Description: <br /><b>${data.jobDescription.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			${data.workMode ? `<br />Work Mode: <b>${data.workMode}</b>` : ''}
			${
				['onsite', 'hybrid', 'flexible'].includes(data.workMode || '')
					? `<br />Location: <b>${data.workLocation}</b>`
					: ''
			}
			${data.salaryOffer ? `<br />Salary: <b>${data.salaryOffer}</b>` : ''}
			${
				data.additionalInformation
					? `<br />Additional Information: <br /><b>${data.additionalInformation.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			
			${contactBody}
			
			`;
		} else if (data.emailSubject === 'partnership') {
			emailBody = `
			<h1 style="background-color:red; color:white; text-align:center; padding:10px">Partnership proposal from <br />${
				data.companyName ? data.companyName : data.fullName
			}</h1><br />
			<hr><br />
			${data.companyName ? `<br />Company Name: <b>${data.companyName}</b>` : ''}
			${data.website ? `<br />Company Website: <a href="${data.website}"><b>${data.website}</b></a>` : ''}
			${
				data.naturePartnership
					? `<br />Nature of Partnership: <br /><b>${data.naturePartnership.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			${
				data.expectedBenefits
					? `<br />Expected Benefits: <br /><b>${data.expectedBenefits.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			${
				data.additionalRequirements
					? `<br />Additional Requirements: <br /><b>${data.additionalRequirements.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			
			${contactBody}
			
			`;
		} else if (data.emailSubject === 'collaboriation') {
			emailBody = `
			<h1 style="background-color:red; color:white; text-align:center; padding:10px">Collaboration proposal from <br />${
				data.companyName
					? data.companyName
					: data.organisationName
					? data.organisationName
					: data.fullName
			}</h1><br />
			<hr><br />
			${data.organisationType ? `<br />Organisation Type: <b>${data.organisationType}</b>` : ''}
			${data.organisationType === 'company' ? `<br />Company Name: <b>${data.companyName}</b>` : ''}}
			${
				data.organisationType === 'charity'
					? `<br />Organisation Name: <b>${data.organisationName}</b>`
					: ''
			}
			${data.website ? `<br />Company Website: <a href="${data.website}"><b>${data.website}</b></a>` : ''}
			${
				data.collaborationDetails
					? `<br />Collaboration Details: <br /><b>${data.collaborationDetails.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			${
				data.expectedOutcomes
					? `<br />Expected Outcomes: <br /><b>${data.expectedOutcomes.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			${
				data.additionalInformation
					? `<br />Additional Information: <br /><b>${data.additionalInformation.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			
			${contactBody}
			
			`;
		} else if (data.emailSubject === 'investment') {
			emailBody = `
			<h1 style="background-color:red; color:white; text-align:center; padding:10px">Investment Opportunity from <br />${
				data.companyName ? data.companyName : data.fullName
			}</h1><br />
			<hr><br />
			${data.companyName ? `<br />Company Name: <b>${data.companyName}</b>` : ''}
			${data.website ? `<br />Company Website: <a href="${data.website}"><b>${data.website}</b></a>` : ''}
			${
				data.investmentDetails
					? `<br />Investment Details: <br /><b>${data.investmentDetails.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			${
				data.expectedReturns
					? `<br />Expected Returns: <br /><b>${data.expectedReturns.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			${
				data.additionalRequirements
					? `<br />Additional Requirements: <br /><b>${data.additionalRequirements.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}
			
			${contactBody}
			
			`;
		} else if (data.emailSubject === 'other') {
			emailBody = `
			<h1 style="background-color:red; color:white; text-align:center; padding:10px">${
				data.fullName
			} wants to Connect</h1><br />
			<hr><br />
			${
				data.emailMessage
					? `<br />Message: <br /><b>${data.emailMessage.replace(/\n/g, '<br />')}</b><br />`
					: ''
			}
			${
				data.additionalInformation
					? `<br />Additional Information: <br /><b>${data.additionalInformation.replace(
							/\n/g,
							'<br />'
					  )}</b><br />`
					: ''
			}

			${contactBody}
			`;
		}
		await sendEmail(data.emailSubject, emailBody);
		return {
			sent: true
		};
	}
} satisfies Actions;

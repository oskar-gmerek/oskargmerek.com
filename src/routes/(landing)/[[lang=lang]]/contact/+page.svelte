<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/button/Button.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import TextInput from '$lib/components/textInput/TextInput.svelte';
	import TextArea from '$lib/components/textarea/TextArea.svelte';
	import { fade, slide } from 'svelte/transition';
	import type { ActionData, PageData } from './$types';
	import { getTranslate } from '@tolgee/svelte';

	export let form: ActionData;

	$: emailSubject = 'choose';
	let emailMessage = '';
	let website = '';

	let deadlineType = 'flexible';
	let projectName = '';
	let projectDetails = '';
	let budget = '';
	let additionalRequirements = '';
	let deadline = '';
	let otherContact = '';
	let companyName = '';
	let workPosition = '';
	let jobDescription = '';
	let workMode = '';

	let workLocation = '';
	let salaryOffer = '';
	let additionalInformation = '';
	let naturePartnership = '';
	let expectedBenefits = '';
	let organisationType = '';

	let organisationName = '';
	let collaborationDetails = '';
	let expectedOutcomes = '';
	let investmentDetails = '';
	let expectedReturns = '';

	let fullName = '';
	let emailAddress = '';
	let mobileNumber = '';
	let transDelay = 150;
	let transDuration = 350;
	let transAxis: 'x' | 'y' = 'y';

	const { t } = getTranslate();

	let subjectOptions = [
		{
			label: $t('contact_choose_subject'),
			value: 'choose'
		},
		{ label: $t('contact_web_dev'), value: 'web_dev' },
		{ label: $t('contact_job_offer', 'Job Offer'), value: 'job_offer' },
		{ label: $t('contact_partnership', 'Business Partnership'), value: 'partnership' },
		{ label: $t('contact_collaboration', 'Collaboration'), value: 'collaboration' },
		{ label: $t('contact_investment', 'Investment Opportunity'), value: 'investment' },
		{ label: $t('contact_other', 'Other Inquiries'), value: 'other' }
	];
	let deadlineTypeOptions = [
		{ label: $t('deadline_flexible', 'Flexible'), value: 'flexible' },
		{ label: $t('deadline_fixed', 'Fixed'), value: 'fixed' }
	];

	let workModeOptions = [
		{ label: $t('workmode_remote', 'Remote'), value: 'remote' },
		{ label: $t('workmode_onsite', 'On-site'), value: 'onsite' },
		{ label: $t('workmode_hybrid', 'Hybrid'), value: 'hybrid' },
		{ label: $t('workmode_flexible', 'Flexible'), value: 'flexible' }
	];

	let organisationTypeOptions = [
		{ label: $t('org_company', 'Company'), value: 'company' },
		{ label: $t('org_charity', 'Charity'), value: 'charity' },
		{ label: $t('org_freelance', 'Freelance'), value: 'freelance' },
		{ label: $t('org_other', 'Other'), value: 'other' }
	];
</script>

<div class="rel bg:#17212d p:20 p:40@sm p:60@lg">
	<h1>{$t('lets_connect', "Let's connect")}</h1>

	<form method="POST" use:enhance class="mt:20">
		<Select
			bind:value={emailSubject}
			name="emailSubject"
			label={$t('subject', 'Subject')}
			options={subjectOptions}
		/>

		{#if emailSubject === 'web_dev'}
			<div transition:slide={{ delay: transDelay, duration: transDuration, axis: transAxis }}>
				<TextInput
					bind:value={projectName}
					name="projectName"
					label={$t('projectName')}
					placeholder={$t('placeholder_projectName', 'e.g. Retro Barbers Website')}
				/>
				<TextArea
					bind:value={projectDetails}
					name="projectDetails"
					label={$t('projectDetails')}
					placeholder={$t('placeholder_projectDetails', 'Detailed description of project')}
				/>
				<TextInput
					bind:value={budget}
					name="budget"
					label={$t('budget', 'Budget')}
					placeholder={$t('placeholder_budget', 'e.g. 1300 GBP')}
				/>
				<Select
					bind:value={deadlineType}
					name="deadlineType"
					label={$t('deadlineType')}
					options={deadlineTypeOptions}
				/>
				{#if emailSubject === 'web_dev' && deadlineType === 'fixed'}
					<div transition:slide={{ delay: transDelay, duration: transDuration, axis: transAxis }}>
						<TextInput
							bind:value={deadline}
							name="deadline"
							label={$t('deadline')}
							placeholder={'31/12/2025'}
						/>
					</div>
				{/if}
				<TextArea
					bind:value={additionalRequirements}
					name="additionalRequirements"
					label={$t('additionalRequirements')}
					placeholder={$t(
						'placeholder_additionalRequirements',
						'Any requirements and informations not included above'
					)}
				/>
			</div>
		{:else if emailSubject === 'job_offer'}
			<div transition:slide={{ delay: transDelay, duration: transDuration, axis: transAxis }}>
				<TextInput
					bind:value={companyName}
					name="companyName"
					label={$t('companyName')}
					placeholder={$t('placeholder_companyName', 'e.g. SurrealDB Ltd')}
				/>
				<TextInput
					bind:value={website}
					name="website"
					label={$t('website', 'Company Website')}
					placeholder={$t('placeholder_website', 'e.g. https://example.com')}
				/>
				<TextInput
					bind:value={workPosition}
					name="workPosition"
					label={$t('workPosition', 'Position')}
					placeholder={$t('placeholder_workPosition', 'e.g. Web Developer')}
				/>
				<TextArea
					bind:value={jobDescription}
					name="jobDescription"
					label={$t('jobDescription', 'Job Description')}
					placeholder={$t('placeholder_jobDescription', 'Details of job')}
				/>
				<Select
					bind:value={workMode}
					name="workMode"
					label={$t('workMode', 'Work Mode')}
					options={workModeOptions}
					placeholder={$t('placeholder_workMode', 'e.g. Remote')}
				/>
				{#if ['onsite', 'hybrid', 'flexible'].includes(workMode)}
					<div transition:slide={{ delay: transDelay, duration: transDuration, axis: transAxis }}>
						<TextInput
							bind:value={workLocation}
							name="workLocation"
							label={$t('workLocation', 'Location')}
							placeholder={$t('placeholder_workLocation', 'e.g. London (W1D 2LG)')}
						/>
					</div>
				{/if}
				<TextInput
					bind:value={salaryOffer}
					name="salaryOffer"
					label={$t('salaryOffer', 'Salary Offer')}
					placeholder={$t('placeholder_salaryOffer', 'e.g. 630 GBP weekly + bonuses ')}
				/>
				<TextArea
					bind:value={additionalInformation}
					name="additionalInformation"
					label={$t('additionalInformation', 'Additional Information')}
					placeholder={$t(
						'placeholder_additionalInformation',
						'Any informations not included above '
					)}
				/>
			</div>
		{:else if emailSubject === 'partnership'}
			<div transition:slide={{ delay: transDelay, duration: transDuration, axis: transAxis }}>
				<TextInput
					bind:value={companyName}
					name="companyName"
					label={$t('companyName', 'Company Name')}
					placeholder={$t('placeholder_companyName', 'e.g. SurrealDB Ltd')}
				/>
				<TextInput
					bind:value={website}
					name="website"
					label={$t('website', 'Company Website')}
					placeholder={$t('placeholder_website', 'e.g. https://example.com')}
				/>
				<TextArea
					bind:value={naturePartnership}
					name="naturePartnership"
					label={$t('naturePartnership', 'Nature of Partnership')}
					placeholder={$t('placeholder_naturePartnership', 'The nature of the Partnership')}
				/>
				<TextArea
					bind:value={expectedBenefits}
					name="expectedBenefits"
					label={$t('expectedBenefits', 'Expected Benefits')}
					placeholder={$t('placeholder_expectedBenefits', 'The goals of Partnership')}
				/>
				<TextArea
					bind:value={additionalInformation}
					name="additionalInformation"
					label={$t('additionalInformation', 'Additional Information')}
					placeholder={$t(
						'placeholder_additionalInformation',
						'Any informations not included above '
					)}
				/>
			</div>
		{:else if emailSubject === 'collaboration'}
			<div transition:slide={{ delay: transDelay, duration: transDuration, axis: transAxis }}>
				<Select
					bind:value={organisationType}
					name="organisationType"
					label={$t('organisationType', 'Organization Type')}
					options={organisationTypeOptions}
				/>
				{#if organisationType === 'company'}
					<TextInput
						bind:value={companyName}
						name="companyName"
						label={$t('companyName', 'Company Name')}
						placeholder={$t('placeholder_companyName', 'e.g. SurrealDB Ltd')}
					/>
				{:else if organisationType === 'charity'}
					<TextInput
						bind:value={organisationName}
						name="organisationName"
						label={$t('organisationName', 'Organisation Name')}
						placeholder={$t('placeholder_organisationName', 'e.g. British Red Cross')}
					/>
				{/if}
				<TextInput
					bind:value={website}
					name="website"
					label={$t('website', 'Website')}
					placeholder={$t('placeholder_website', 'e.g. https://example.com')}
				/>
				<TextArea
					bind:value={collaborationDetails}
					name="collaborationDetails"
					label={$t('collaborationDetails', 'Collaboration Details')}
					placeholder={$t('placeholder_collaborationDetails', 'The detail of the Collaboration')}
				/>
				<TextArea
					bind:value={expectedOutcomes}
					name="expectedOutcomes"
					label={$t('expectedOutcomes', 'Expected Outcomes')}
					placeholder={$t('placeholder_expectedOutcomes', 'The goals of the Collaboration')}
				/>
				<TextArea
					bind:value={additionalInformation}
					name="additionalInformation"
					label={$t('additionalInformation', 'Additional Information')}
					placeholder={$t(
						'placeholder_additionalInformation',
						'Any informations not included above '
					)}
				/>
			</div>
		{:else if emailSubject === 'investment'}
			<div transition:slide={{ delay: transDelay, duration: transDuration, axis: transAxis }}>
				<TextInput
					bind:value={companyName}
					name="companyName"
					label={$t('companyName', 'Company Name')}
					placeholder={$t('placeholder_companyName', 'e.g. SurrealDB Ltd')}
				/>
				<TextInput
					bind:value={website}
					name="website"
					label={$t('website', 'Company Website')}
					placeholder={$t('placeholder_website', 'e.g. https://example.com')}
				/>
				<TextArea
					bind:value={investmentDetails}
					name="investmentDetails"
					label={$t('investmentDetails', 'Investment Details')}
					placeholder={$t('placeholder_investmentDetails', 'Details of the Investment')}
				/>
				<TextArea
					bind:value={expectedReturns}
					name="expectedReturns"
					label={$t('expectedReturns', 'Expected Returns')}
					placeholder={$t('placeholder_expectedReturns', 'Investment objectives')}
				/>
				<TextArea
					bind:value={additionalInformation}
					name="additionalInformation"
					label={$t('additionalInformation', 'Additional Information')}
					placeholder={$t(
						'placeholder_additionalInformation',
						'Any informations not included above '
					)}
				/>
			</div>
		{:else if emailSubject === 'other'}
			<div transition:slide={{ delay: transDelay, duration: transDuration, axis: transAxis }}>
				<TextArea
					bind:value={emailMessage}
					name="emailMessage"
					label={$t('emailMessage', 'Message')}
					placeholder={$t('placeholder_emailMessage', 'Content of the message')}
				/>
				<TextArea
					bind:value={additionalInformation}
					name="additionalInformation"
					label={$t('additionalInformation', 'Additional Information')}
					placeholder={$t(
						'placeholder_additionalInformation',
						'Any informations not included above '
					)}
				/>
			</div>
		{/if}

		{#if emailSubject !== 'choose'}
			<div
				class="mt:50"
				transition:slide={{ delay: transDelay, duration: transDuration, axis: transAxis }}
			>
				<h2>{$t('contact_details_h2')}<span class="fg:red">*</span></h2>
				<TextInput
					bind:value={fullName}
					name="fullName"
					label={$t('fullName', 'Full name')}
					placeholder={$t('placeholder_fullName', 'e.g. John Doe')}
					error={form?.error.field === 'fullName'
						? $t('fullName_required', 'Please provide your name')
						: ''}
				/>

				<TextInput
					bind:value={emailAddress}
					name="emailAddress"
					label={$t('emailAddress', 'Email address')}
					type="email"
					placeholder={$t('placeholder_emailAddress', 'e.g. john.doe@example.com')}
				/>
				<TextInput
					bind:value={mobileNumber}
					name="mobileNumber"
					label={$t('mobileNumber', 'Mobile number')}
					placeholder={$t('placeholder_mobileNumber', 'e.g. 07305112233')}
				/>
				<TextArea
					bind:value={otherContact}
					name="otherContact"
					label={$t('otherContact', 'Other Contact Ways')}
					placeholder={$t('placeholder_otherContact', 'e.g. Discord: JohnDoe#1234')}
				/>
				<div class="flex jc:end ai:center">
					<div
						class="px:8 fg:red"
						in:fade={{ delay: transDuration, duration: transDuration }}
						out:fade={{ delay: transDuration, duration: transDuration }}
					>
						{form?.error.field === 'contact'
							? $t('contact_required', 'Please provide at least one form of contact')
							: ''}
					</div>
					<Button>{$t('submit_button')}</Button>
				</div>
			</div>
		{/if}
	</form>
</div>

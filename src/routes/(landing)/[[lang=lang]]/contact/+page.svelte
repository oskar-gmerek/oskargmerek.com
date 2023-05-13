<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/button/Button.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import TextInput from '$lib/components/textInput/TextInput.svelte';
	import TextArea from '$lib/components/textarea/TextArea.svelte';
	import { fade, slide } from 'svelte/transition';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;

	$: emailSubject = 'choose';
	let emailMessage = '';
	let website = '';
	let subjectOptions = [
		{ label: 'Please select the appropriate subject', value: 'choose' },
		{ label: 'Web Development', value: 'web_dev' },
		{ label: 'Job Offer', value: 'job_offer' },
		{ label: 'Business Partnership', value: 'partnership' },
		{ label: 'Collaboration', value: 'collaboration' },
		{ label: 'Investment Opportunity', value: 'investment' },
		{ label: 'Other Inquiries', value: 'other' }
	];
	let deadlineTypeOptions = [
		{ label: 'Flexible', value: 'flexible' },
		{ label: 'Fixed', value: 'fixed' }
	];
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
	let workModeOptions = [
		{ label: 'Remote', value: 'remote' },
		{ label: 'On-site', value: 'onsite' },
		{ label: 'Hybrid', value: 'hybrid' },
		{ label: 'Flexible', value: 'flexible' }
	];
	let workLocation = '';
	let salaryOffer = '';
	let additionalInformation = '';
	let naturePartnership = '';
	let expectedBenefits = '';
	let organisationType = '';
	let organisationTypeOptions = [
		{ label: 'Company', value: 'company' },
		{ label: 'Charity', value: 'charity' },
		{ label: 'Freelance', value: 'freelance' },
		{ label: 'Other', value: 'other' }
	];
	let organisationName = '';
	let collaborationDetails = '';
	let expectedOutcomes = '';
	let investmentDetails = '';
	let expectedReturns = '';

	let fullName = '';
	let emailAddress = '';
	let mobileNumber = '';
</script>

<div class="rel bg:#17212d p:20 p:40@sm p:60@lg">
	<h1>Let's connect:</h1>

	<form method="POST" use:enhance class="mt:20">
		<Select
			bind:value={emailSubject}
			name="emailSubject"
			label="Subject"
			options={subjectOptions}
		/>

		{#if emailSubject === 'web_dev'}
			<div
				in:slide={{ delay: 250, duration: 300, axis: 'y' }}
				out:slide={{ delay: 250, duration: 300, axis: 'y' }}
			>
				<TextInput
					bind:value={projectName}
					name="projectName"
					label="Project Name"
					placeholder="e.g. Retro Barbers Website"
				/>
				<TextArea
					bind:value={projectDetails}
					name="projectDetails"
					label="Project Details"
					placeholder="Detailed description of project"
				/>
				<TextInput bind:value={budget} name="budget" label="Budget" placeholder="e.g. 1300 GBP" />
				<Select
					bind:value={deadlineType}
					name="deadlineType"
					label="Deadline"
					options={deadlineTypeOptions}
				/>
				{#if emailSubject === 'web_dev' && deadlineType === 'fixed'}
					<div
						in:slide={{ delay: 250, duration: 300, axis: 'y' }}
						out:slide={{ delay: 250, duration: 300, axis: 'y' }}
					>
						<TextInput bind:value={deadline} name="deadline" label="Deadline Date" />
					</div>
				{/if}
				<TextArea
					bind:value={additionalRequirements}
					name="additionalRequirements"
					label="Additional Requirements"
					placeholder="Any requirements and informations not included above"
				/>
			</div>
		{:else if emailSubject === 'job_offer'}
			<TextInput
				bind:value={companyName}
				name="companyName"
				label="Company Name"
				placeholder="e.g. SurrealDB Ltd"
			/>
			<TextInput
				bind:value={website}
				name="website"
				label="Company Website"
				placeholder="e.g. https://example.com"
			/>
			<TextInput
				bind:value={workPosition}
				name="workPosition"
				label="Position"
				placeholder="e.g. Web Developer"
			/>
			<TextArea
				bind:value={jobDescription}
				name="jobDescription"
				label="Job Description"
				placeholder="Details of job"
			/>
			<Select
				bind:value={workMode}
				name="workMode"
				label="Work Mode"
				options={workModeOptions}
				placeholder="e.g. Remote"
			/>
			{#if ['onsite', 'hybrid', 'flexible'].includes(workMode)}
				<div
					in:slide={{ delay: 250, duration: 300, axis: 'y' }}
					out:slide={{ delay: 250, duration: 300, axis: 'y' }}
				>
					<TextInput
						bind:value={workLocation}
						name="workLocation"
						label="Location"
						placeholder="e.g. London (W1D 2LG)"
					/>
				</div>
			{/if}
			<TextInput
				bind:value={salaryOffer}
				name="salaryOffer"
				label="Salary Offer"
				placeholder="e.g. 630 GBP weekly + bonuses "
			/>
			<TextArea
				bind:value={additionalInformation}
				name="additionalInformation"
				label="Additional Information"
				placeholder="Any informations not included above "
			/>
		{:else if emailSubject === 'partnership'}
			<TextInput
				bind:value={companyName}
				name="companyName"
				label="Company Name"
				placeholder="e.g. SurrealDB Ltd"
			/>
			<TextInput
				bind:value={website}
				name="website"
				label="Company Website"
				placeholder="e.g. https://example.com"
			/>
			<TextArea
				bind:value={naturePartnership}
				name="naturePartnership"
				label="Nature of Partnership"
				placeholder="The nature of the Partnership"
			/>
			<TextArea
				bind:value={expectedBenefits}
				name="expectedBenefits"
				label="Expected Benefits"
				placeholder="The goals of Partnership"
			/>
			<TextArea
				bind:value={additionalInformation}
				name="additionalInformation"
				label="Additional Information"
				placeholder="Any informations not included above "
			/>
		{:else if emailSubject === 'collaboration'}
			<Select
				bind:value={organisationType}
				name="organisationType"
				label="Organization Type"
				options={organisationTypeOptions}
			/>
			{#if organisationType === 'company'}
				<TextInput
					bind:value={companyName}
					name="companyName"
					label="Company Name"
					placeholder="e.g. SurrealDB Ltd"
				/>
			{:else if organisationType === 'charity'}
				<TextInput
					bind:value={organisationName}
					name="organisationName"
					label="Organisation Name"
					placeholder="e.g. British Red Cross"
				/>
			{/if}
			<TextInput
				bind:value={website}
				name="website"
				label="Website"
				placeholder="e.g. https://example.com"
			/>
			<TextArea
				bind:value={collaborationDetails}
				name="collaborationDetails"
				label="Collaboration Details"
				placeholder="The detail of the Collaboration"
			/>
			<TextArea
				bind:value={expectedOutcomes}
				name="expectedOutcomes"
				label="Expected Outcomes"
				placeholder="The goals of the Collaboration"
			/>
			<TextArea
				bind:value={additionalInformation}
				name="additionalInformation"
				label="Additional Information"
				placeholder="Any informations not included above "
			/>
		{:else if emailSubject === 'investment'}
			<TextInput
				bind:value={companyName}
				name="companyName"
				label="Company Name"
				placeholder="e.g. SurrealDB Ltd"
			/>
			<TextInput
				bind:value={website}
				name="website"
				label="Company Website"
				placeholder="e.g. https://example.com"
			/>
			<TextArea
				bind:value={investmentDetails}
				name="investmentDetails"
				label="Investment Details"
				placeholder="Details of the Investment"
			/>
			<TextArea
				bind:value={expectedReturns}
				name="expectedReturns"
				label="Expected Returns"
				placeholder="Investment objectives"
			/>
			<TextArea
				bind:value={additionalInformation}
				name="additionalInformation"
				label="Additional Information"
				placeholder="Any informations not included above "
			/>
		{:else if emailSubject === 'other'}
			<TextArea
				bind:value={emailMessage}
				name="emailMessage"
				label="Message"
				placeholder="Content of the message"
			/>
			<TextArea
				bind:value={additionalInformation}
				name="additionalInformation"
				label="Additional Information"
				placeholder="Any informations not included above "
			/>
		{/if}

		{#if emailSubject !== 'choose'}
			<div
				in:slide={{ delay: 300, duration: 300, axis: 'y' }}
				out:slide={{ delay: 300, duration: 300, axis: 'y' }}
			>
				<h2>Contact Details <span class="fg:red">*</span></h2>
				<TextInput
					bind:value={fullName}
					name="fullName"
					label="Full name"
					placeholder="e.g. John Doe"
					error={form?.error.field === 'fullName' ? form?.error.message : ''}
				/>

				<TextInput
					bind:value={emailAddress}
					name="emailAddress"
					label="Email address"
					type="email"
					placeholder="e.g. john.doe@example.com"
				/>
				<TextInput
					bind:value={mobileNumber}
					name="mobileNumber"
					label="Mobile number"
					placeholder="e.g. 07305112233"
				/>
				<TextArea
					bind:value={otherContact}
					name="otherContact"
					label="Other Contact Ways"
					placeholder="e.g. Discord: JohnDoe#1234"
				/>
				<div class="flex jc:end ai:center">
					<div
						class="px:8 fg:red"
						in:fade={{ delay: 300, duration: 300 }}
						out:fade={{ delay: 300, duration: 300 }}
					>
						{form?.error.field === 'contact' ? form?.error.message : ''}
					</div>
					<Button />
				</div>
			</div>
		{/if}
	</form>
</div>

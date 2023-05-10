<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/button/Button.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import TextInput from '$lib/components/textinput/TextInput.svelte';
	import TextArea from '$lib/components/textarea/TextArea.svelte';
	import { fade, fly, slide } from 'svelte/transition';

	$: emailSubject = 'choose';
	let emailMessage = '';
	let website = 'https://';
	let subjectOptions = [
		{ label: 'Please select the appropriate subject', value: 'choose' },
		{ label: 'Web Development', value: 'web_dev' },
		{ label: 'Job Offer', value: 'job_offer' },
		{ label: 'Business Partnership', value: 'partnership' },
		{ label: 'Collaboration', value: 'collaboration' },
		{ label: 'Investment Opportunity', value: 'investment' },
		{ label: 'Other Inquiries', value: 'investment' }
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
		{ label: 'Hybrid (Flexible Office)', value: 'hybrid_flexible' }
	];
	let workLocation = '';
	let salaryOffer = '';
	let additionalInformation = '';

	let userName = '';
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
				<TextInput bind:value={projectName} name="projectName" label="Project Name" />
				<TextArea bind:value={projectDetails} name="projectDetails" label="Project Details" />
				<TextInput bind:value={budget} name="budget" label="Budget" />
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
				/>
			</div>
		{:else if emailSubject === 'job_offer'}
			<TextInput bind:value={companyName} name="companyName" label="Company Name" />
			<TextInput bind:value={website} name="website" label="Company Website" />
			<TextInput bind:value={workPosition} name="workPosition" label="Position" />
			<TextArea bind:value={jobDescription} name="jobDescription" label="Job Description" />
			<Select bind:value={workMode} name="workMode" label="Work Mode" options={workModeOptions} />
			{#if ['onsite', 'hybrid', 'hybrid_flexible'].includes(workMode)}
				<div
					in:slide={{ delay: 250, duration: 300, axis: 'y' }}
					out:slide={{ delay: 250, duration: 300, axis: 'y' }}
				>
					<TextInput bind:value={workLocation} name="workLocation" label="Location" />
				</div>
			{/if}
			<TextInput
				bind:value={salaryOffer}
				name="emailSubject"
				label="Salary Offer"
				placeholder="ex. 630 GBP weekly + bonuses "
			/>
			<TextArea
				bind:value={additionalInformation}
				name="additionalInformation"
				label="Additional"
			/>
		{/if}
		{#if emailSubject !== 'choose'}
			<div
				in:slide={{ delay: 250, duration: 300, axis: 'y' }}
				out:slide={{ delay: 250, duration: 300, axis: 'y' }}
			>
				<h2>Contact Details <span class="fg:red">*</span></h2>
				<TextInput bind:value={userName} name="userName" label="Full name" />
				<TextInput bind:value={emailAddress} name="userName" label="Email address" />
				<TextInput bind:value={mobileNumber} name="userName" label="Mobile number" />
				<TextArea bind:value={otherContact} name="otherContact" label="Other Contact Ways" />
				<div class="flex jc:end">
					<Button />
				</div>
			</div>
		{/if}
	</form>
</div>

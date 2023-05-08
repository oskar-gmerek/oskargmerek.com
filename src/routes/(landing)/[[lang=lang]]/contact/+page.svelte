<script lang="ts">
	import { enhance } from '$app/forms';
	import Select from '$lib/components/select/Select.svelte';
	import TextInput from '$lib/components/textInput/TextInput.svelte';
	import TextArea from '$lib/components/textarea/TextArea.svelte';
	import { fade, fly, slide } from 'svelte/transition';

	let emailSubject = 'choose';
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
	let projectDetails = '';
	let budget = '';
	let additionalRequirements = '';
	let deadline = '';
	// let deadline = '';
	// let deadline = '';
	// let deadline = '';
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
				<TextInput bind:value={emailSubject} name="emailSubject" label="Full name" />

				<TextArea bind:value={projectDetails} name="projectDetails" label="Project Details" />
				<TextInput bind:value={budget} name="budget" label="Budget" />
				<Select
					bind:value={deadlineType}
					name="deadlineType"
					label="Deadline"
					options={deadlineTypeOptions}
				>
					<option value={`fixed`}>{`Fixed Deadline`}</option>
					<option value={`flexible`}>{`Flexible Deadline`}</option>
				</Select>
				{#if emailSubject === 'web_dev' && deadlineType === 'fixed'}
					<TextInput bind:value={deadline} name="deadline" label="Deadline Date" />
				{/if}
				<TextArea
					bind:value={additionalRequirements}
					name="additionalRequirements"
					label="Additional Requirements"
					rows={3}
				/>
			</div>
		{:else if emailSubject === 'job_offer'}
			<TextInput bind:value={emailSubject} name="emailSubject" label="Name" />
			<TextInput bind:value={emailSubject} name="emailSubject" label="Name" />
			<TextInput bind:value={emailSubject} name="emailSubject" label="Email" />
			<TextInput bind:value={emailSubject} name="emailSubject" label="Phone number" />
			<TextInput bind:value={website} name="website" label="Website" />
			<TextArea bind:value={emailMessage} name="emailSubject" label="Message" />
		{/if}
		{#if emailSubject !== 'choose'}
			<button>Send!</button>
		{/if}
	</form>
</div>

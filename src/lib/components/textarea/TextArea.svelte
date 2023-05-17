<script lang="ts">
	import randomString from '$lib/utils/randomString';
	import { fade } from 'svelte/transition';
	import { getTranslate } from '@tolgee/svelte';
	export let value = '';
	export let name = '';
	export let maxlength = 5000;
	export let label = '';
	export let description = '';
	export let placeholder = '';
	export { className as class };

	const id = randomString(7);
	let className = `bg:rgb(8,19,33)  w:full h:62 p:16 b:4|solid|rgb(8,19,33)  b:4|solid|orange:focus outline:none ~border|0.5s r:10 resize:none`;
	let textarea: HTMLTextAreaElement;

	const textareaResize = () => {
		if (textarea) {
			textarea.style.height = '62px';
			textarea.style.height = `${textarea.scrollHeight + 8}px`;
		}
	};

	const { t } = getTranslate();
</script>

{#if label}
	<label for={id}>{label}</label>
{/if}
{#if description}
	<div class="fg:white/.6">{description}</div>
{/if}

<div class="mt:10 mb:50 r:7">
	<textarea
		{id}
		{name}
		{maxlength}
		class={className}
		bind:this={textarea}
		bind:value
		on:input={textareaResize}
		{placeholder}
	/>
	{#if value.length > 0}
		<div
			class="rel float:right top:5 bg:rgb(8,19,33) r:7 p:5|20"
			in:fade={{
				delay: 250,
				duration: 300
			}}
		>
			{$t('x_characters', `${value.length} characters`, { length: `${value.length}` })}
		</div>
	{:else}
		<div
			class="rel float:right top:5 bg:rgb(8,19,33) r:7 p:5|20"
			in:fade={{
				delay: 250,
				duration: 300
			}}
		>
			{$t('max_characters', `Max ${maxlength} characters`, { maxlength: `${maxlength}` })}
		</div>
	{/if}
</div>

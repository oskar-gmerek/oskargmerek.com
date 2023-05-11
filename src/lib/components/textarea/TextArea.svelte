<script lang="ts">
	import randomString from '$lib/utils/randomString';
	import { fade } from 'svelte/transition';

	export let value = '';
	export let name = '';
	export let maxlength = 5000;
	export let label = '';
	export let description = '';
	export { className as class };

	const id = randomString(7);
	let className =
		'w:full h:54px  p:16 outline:4|solid|rgb(8,19,33) outline:4|solid|orange:focus ~outline|0.5s r:7 resize:none  ';

	let textarea: HTMLTextAreaElement;

	const textareaResize = () => {
		if (textarea) {
			textarea.style.height = '54px';
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	};
</script>

{#if label}
	<label for={id}>{label}</label>
{/if}
{#if description}
	<div class="fg:white/.6">{description}</div>
{/if}

<div class="bg:rgb(8,19,33) mt:10 mb:50 r:7">
	<textarea
		{id}
		{name}
		{maxlength}
		class={className}
		bind:this={textarea}
		bind:value
		on:input={textareaResize}
	/>
	{#if value.length > 0}
		<div
			class="rel float:right top:5 bg:rgb(8,19,33) r:7 p:5|20"
			in:fade={{
				delay: 250,
				duration: 300
			}}
		>
			{value.length} characters
		</div>
	{:else}
		<div
			class="rel float:right top:5 bg:rgb(8,19,33) r:7 p:5|20"
			in:fade={{
				delay: 250,
				duration: 300
			}}
		>
			Max {maxlength} characters
		</div>
	{/if}
</div>

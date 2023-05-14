<script lang="ts">
	import randomString from '$lib/utils/randomString';
	import { slide } from 'svelte/transition';
	export let value = '';
	export let name = '';
	export { className as class };
	export let label = '';
	export let description = '';
	export let placeholder = '';
	export let error = '';
	export let type = 'text';
	let className = `w:full h:full p:16 outline:4|solid|rgb(8,19,33) outline:4|solid|orange:focus ~outline|0.5s r:7`;

	const id = randomString(7);
</script>

{#if label}
	<label for={id}>{label}</label>
{/if}
{#if description}
	<div class="fg:white/.6">{description}</div>
{/if}
<div class="mb:30">
	<div
		class={`bg:rgb(8,19,33) mt:10  ${
			error ? 'bg:red-20 outline:4|solid|red>input mb:10' : 'mb:30'
		}`}
	>
		{#if type === 'email'}
			<input
				{id}
				class={className}
				type="email"
				{name}
				bind:value
				{placeholder}
				on:change={() => (error = '')}
			/>
		{:else}
			<input
				{id}
				class={className}
				type="text"
				{name}
				bind:value
				{placeholder}
				on:change={() => (error = '')}
			/>
		{/if}
	</div>
	{#if error}
		<div class="fg:red" transition:slide={{ delay: 50, duration: 150, axis: 'y' }}>
			{error}
		</div>
	{/if}
</div>

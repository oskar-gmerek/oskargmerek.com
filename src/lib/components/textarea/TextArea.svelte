<script lang="ts">
	import randomString from '$lib/utils/randomString';
	import { fade, slide } from 'svelte/transition';
	export let value = '';
	export let name = '';
	export let rows = 5;
	export let cols = 50;
	export { className as class };
	export let label = '';
	export let description = '';
	let className =
		'w:full h:full p:16 pr:30 outline:4|solid|rgb(8,19,33) outline:4|solid|orange:focus ~outline|0.5s r:7  resize:vertical pb:38';

	const id = randomString(7);
	$: value;
</script>

{#if label}
	<label for={id}>{label}</label>
{/if}
{#if description}
	<div class="fg:white/.6">Description of input</div>
{/if}

<div class="bg:rgb(8,19,33) mt:10 mb:50 r:7">
	<textarea {id} class={className} {name} bind:value {rows} {cols} />
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
			Max 5000 characters
		</div>
	{/if}
</div>

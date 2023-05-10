<script lang="ts">
	import randomString from '$lib/utils/randomString';
	import { fade } from 'svelte/transition';

	export let value = '';
	export let name = '';
	export let rows = 2;
	export let maxlength = 5000;
	export let label = '';
	export let description = '';
	export { className as class };

	const id = randomString(7);

	let className =
		'w:full h:full  p:16 outline:4|solid|rgb(8,19,33) outline:4|solid|orange:focus ~outline|0.5s r:7|7|0|7 resize:vertical  ';

	$: rows = value.split(/\r\n|\r|\n/).length;
	$: console.log(value.split(/\r\n|\r|\n/).length);
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
		class={className}
		{name}
		bind:value
		{maxlength}
		rows={value.split(/\r\n|\r|\n/).length || rows}
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

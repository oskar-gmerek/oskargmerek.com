<script lang="ts">
	import randomString from '$lib/utils/randomString';
	export let value = '';
	export let name = '';
	export { className as class };
	export let label = '';
	export let description = '';
	let className =
		'w:full h:full p:16 pr:30 outline:4|solid|rgb(8,19,33) outline:4|solid|orange:focus ~outline|0.5s r:7 ';

	const id = randomString(7);
</script>

{#if label}
	<label for={id}>{label}</label>
{/if}
{#if description}
	<div class="fg:white/.6">Description of input</div>
{/if}
<div class="bg:rgb(8,19,33) mt:10 mb:30">
	<input {id} class={className} type="text" {name} bind:value />
</div>

<script lang="ts">
	import randomString from '$lib/utils/randomString';
	export let value = '';
	export let name = '';
	export { className as class };
	export let label = '';
	export let description = '';
	export let containerStyle = '';
	export let placeholder = '';
	export let disabled = false;
	type Options =
		| {
				label: string;
				value: string;
		  }[]
		| null;
	export let options: Options = null;
	let className =
		'w:full h:full   p:16 pr:30 outline:4|solid|rgb(8,19,33) outline:4|solid|orange:focus ~outline|0.5s r:7  appearance:none z:10 ';
	export let mcss = '';

	const id = randomString(7) + name;
</script>

{#if label}
	<label for={id}>{label}</label>
{/if}
{#if description}
	<div class="fg:white/.6">{description}</div>
{/if}
<div class={` bg:rgb(8,19,33) flex align-items:center mt:10 mb:30 ` + ' ' + containerStyle}>
	<select {id} class={className + ' ' + mcss} {name} bind:value on:change {placeholder}>
		{#if options}
			{#each options as option}
				<option value={option.value} {disabled}>{option.label}</option>
			{/each}
		{:else}
			<slot name="options" />
		{/if}
	</select>
	<div class="arrowDown rel">
		<div class="abs top:-7 left:-20 f:12">⋁</div>
	</div>
</div>

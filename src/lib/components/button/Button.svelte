<script lang="ts">
	export let type: 'submit' | 'button' | 'reset' | 'a' | null | undefined = 'submit';
	export let href = '';
	export let hreflang = '';
	export let title = '';
	export let mcss = '';
	export { className as class };

	let className =
		'fg:#17212d font:bold bg:orange ml:5 py:10 px:12 r:7 outline:2|solid|#17212d outline:2|solid|orange:hover b:2|solid|#17212d' +
		' ' +
		mcss;
</script>

{#if type === 'a' || href !== ''}
	<a {href} {hreflang} class={className} {title}><slot>Go to</slot></a>
{:else}
	<button {type} class={className} {title} on:click><slot>Submit</slot></button>
{/if}

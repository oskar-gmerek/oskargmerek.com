<script lang="ts">
	export let type: 'submit' | 'button' | 'reset' | null | undefined = 'submit';
	export { className as class };

	let className =
		'fg:#17212d font:bold bg:orange  py:10 px:12 r:7 outline:2|solid|#17212d outline:2|solid|orange:hover b:2|solid|#17212d';
</script>

<button {type} class={className} on:click><slot>Submit</slot></button>

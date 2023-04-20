<script lang="ts">
	import Logo from '$lib/components/Monogram.svelte';
	import LangSelect from '$lib/components/LangSelect.svelte';
</script>

<div class="fixed top:0 w:full">
	<nav class="flex m:auto max-w:lg bg:background ai:center py:10">
		<Logo class="h:70 p:10 fill:orange b:green|2|2" />
		<div class=""><LangSelect /></div>
		<div class="flex p:5>div m:5>div m:20@sm>div bg:orange>div:hover">
			<div class="">Home</div>
			<div class="">Projects</div>
			<div class="hidden block@2xs">Articles</div>
			<div class="hidden block@2xs">Notes</div>
			<div class="">Contact</div>
		</div>
	</nav>
</div>

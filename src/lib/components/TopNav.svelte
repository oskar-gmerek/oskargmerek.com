<script lang="ts">
	import Logo from '$lib/components/Monogram.svelte';
	import LangSelect from '$lib/components/LangSelect.svelte';
</script>

<div class="fixed top:0 w:full z:100">
	<nav class="flex m:auto max-w:lg bg:background ai:center py:10">
		<Logo class="h:70 p:10 fill:orange b:green|2|2" />
		<div class=""><LangSelect /></div>
		<div class="flex p:5>div m:5>div m:20@sm>div">
			<div class="bg:orange:hover"><a href="/">Home</a></div>
			<div class="bg:gray/.2:hover fg:gray/.7 cursor:not-allowed" title="Work In Progress">
				Projects
			</div>
			<div
				class="bg:gray/.2:hover fg:gray/.7 cursor:not-allowed hidden block@2xs"
				title="Work In Progress"
			>
				Articles
			</div>
			<div
				class="bg:gray/.2:hover fg:gray/.7 cursor:not-allowed hidden block@2xs"
				title="Work In Progress"
			>
				Notes
			</div>
			<div class="bg:gray/.2:hover fg:gray/.7 cursor:not-allowed" title="Work In Progress">
				Contact
			</div>
		</div>
	</nav>
</div>

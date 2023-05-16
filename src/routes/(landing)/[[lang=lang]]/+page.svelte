<script>
	import Button from '$lib/components/button/Button.svelte';
	import BannerMe from '$lib/modules/landing/BannerMe.svelte';
	import { T, getTranslate } from '@tolgee/svelte';
	const { t } = getTranslate();
</script>

<div
	class="rel transform:rotate(2deg):hover_.codeimg1 transform:rotate(7deg):hover_.codeimg2 transform:rotate(12deg):hover_.codeimg3
	transform:translate(0,-20px)rotate(55deg):hover_.orangeShape transform:translate(0,-20px)rotate(55deg):hover_.orangeShape
	transform:translate(-20px,-17px):hover_.cyanShape
	transform:translate(20,-80)rotate(-15deg):hover_.crimsonShape
	rtr:50:hover_.crimsonShape
	rtl:100:hover_.crimsonShape
	rbl:15:hover_.orangeShape
	transform:translate(-50,-42)rotate(-50deg):hover_.blueShape
	rtl:45:hover_.blueShape
	opacity:1:hover_.greenShape
	r:100:hover_.greenShape

	"
>
	<div class="rel bg:rgb(23,33,45) p:20|20|20|20 p:40|0|0|40@sm p:60|0|0|60@lg overflow-x:clip">
		<div class="flex gap:50 h:420">
			<div class="m:0|0|0|0 pr:100@sm w:full overflow:clip">
				<h1 class="f:bold f:30 f:60@md">
					<T keyName="hello_world" defaultValue="Hello, world" />! <br /><span class="f:30 f:60@md"
						><T keyName="i_am" defaultValue="I'm" /> Oskar,</span
					>
				</h1>
				<p class="f:14 f:16@md">
					<T
						keyName="landing_hello_world_hero"
						defaultValue="an aspiring web developer on a mission to conquer the digital landscape. Fueled by
					curiosity and a hunger for growth, I am constantly exploring new technologies and
					techniques to sharpen my skills. While my portfolio may be modest for now, my
					determination and passion speak volumes. Stick around, witness my journey, and let's
					connect – we might just collaborate on something extraordinary!"
					/>
				</p>
				<div class="flex jc:center p:20">
					<Button>Let's connect</Button>
				</div>
			</div>
			<BannerMe class="banner hidden block@sm " />
		</div>
	</div>
</div>

<!-- <div class=" mt:20 bg:green w:full h:300 z:90">Test</div>
<div class=" mt:20 bg:red w:full h:300 z:90">Test</div>
<div class=" mt:20 bg:blue w:full h:300 z:90">Test</div> -->

<!-- <T keyName="key" defaultValue="This is default" />
	
	OR
	
	{$t('this_is_a_key')} -->

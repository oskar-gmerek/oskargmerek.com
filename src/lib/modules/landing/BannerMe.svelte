<script lang="ts">
	import oskar_img from '$lib/images/web_developer_oskar_gmerek.png?w=295&h=420&format=webp&imagetools';
	import oskar_img_x2 from '$lib/images/web_developer_oskar_gmerek.png?w=590&h=840&format=webp&imagetools';
	import codeimg from '$lib/images/welcome-html-black.png?w=340&h=195&format=webp&imagetools';
	import codeimg_retina from '$lib/images/welcome-html-black.png?w=680&h=390&format=webp&imagetools';
	import videobackground from '$lib/images/web_development_video_background.mp4';
	import { getTranslate } from '@tolgee/svelte';

	let className = '';
	export { className as class };

	const { t } = getTranslate();
</script>

<div class={` w:420 max-h:fit ` + ' ' + className}>
	<div class="flex rel left:-180">
		<div
			class="cyanShape bg:rgba(0,228,224,0.713) w:100 h:100 rel top:210 left:calc(300) transform:rotate(0deg) z:10 ~all|500ms|ease-in-out ~delay:500ms"
		/>
		<div
			class="crimsonShape bg:crimson/.9 w:150 h:300 rel top:50 left:calc(278) transform:rotate(-20deg) z:10 ~all|1100ms|ease-in-out ~delay:300ms"
		/>
		<div
			class="blueShape bg:blue/.5 w:150 h:250 rel top:50 left:calc(50) transform:rotate(-50deg) rtr:200 z:20 ~all|800ms|ease-in-out ~delay:300ms"
		/>
		<div
			class="orangeShape bg:orange w:150 h:190 rel top:150 left:calc(-50) transform:translate(0)rotate(55deg) z:20 ~all|300ms|ease-in-out ~delay:100ms
	
	"
		/>
		<div
			class="greenShape opacity:0 bg:rgb(16,226,100) w:30 h:30 r:0 rel left:-218 transform:rotate(20deg) z:0 ~all|2s|ease-in-out ~delay:1.5s"
		/>
	</div>
	<div class="flex rel left:-580">
		<img
			srcset={`${codeimg}, ${codeimg_retina} 2x`}
			src={codeimg}
			alt={$t('codeimg1')}
			title={$t('codeimg1')}
			class="codeimg3 block rel h:195 w:340 z:20 top:275 left:-80 transform:rotate(5deg) transform:bottom|right ~all|300ms|ease-in ~delay:300ms box-shadow:3|3|10|black/.75 r:15
		"
		/>
		<img
			srcset={`${codeimg}, ${codeimg_retina} 2x`}
			src={codeimg}
			alt={$t('codeimg2')}
			title={$t('codeimg2')}
			class="h:195 w:340 codeimg2 block rel z:20 top:275 left:calc(-340-80) transform:rotate(5deg) transform:bottom|right transform:bottom|right ~all|300ms|ease-in ~delay:200ms box-shadow:3|3|10|black/.75 r:15
		"
		/>
		<img
			srcset={`${codeimg}, ${codeimg_retina} 2x`}
			src={codeimg}
			alt={$t('codeimg3')}
			title={$t('codeimg3')}
			class="h:195 w:340 codeimg1 block rel z:90 top:275 left:calc(-340-340-80) transform:rotate(5deg) transform:bottom|right transform:bottom|right ~all|300ms|ease-in ~delay:100ms box-shadow:3|3|10|black/.75 r:15
		"
		/>
		<img
			srcset={`${oskar_img}, ${oskar_img_x2} 2x`}
			src={oskar_img}
			alt={$t('oskar_img')}
			title={$t('oskar_img')}
			class="oskarshadow rel brightness(0) h:420 w:295 z:80 left:calc(-680-200) ~all|700ms|ease-in-out ~delay:50ms
			"
		/>
		<img
			srcset={`${oskar_img}, ${oskar_img_x2} 2x`}
			src={oskar_img}
			alt={$t('oskar_img2')}
			title={$t('oskar_img2')}
			class="oskarimg rel h:420 w:295 z:80 left:calc(-680-500) ~all|700ms|ease-in-out ~delay:50ms
		"
		/>
		<video
			autoplay
			loop
			muted
			controls={false}
			playsinline
			class={`rel blend:screen h:420 w:full  left:calc(-680-200-500)`}
			title={$t('hero_videobg')}
		>
			<source src={videobackground} />
		</video>
	</div>
</div>

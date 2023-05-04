<script lang="ts">
	import oskar_img from '$lib/images/web_developer_oskar_gmerek.png?w=295&h=420&format=webp&imagetools';
	import oskar_img_x2 from '$lib/images/web_developer_oskar_gmerek.png?w=590&h=840&format=webp&imagetools';
	import codeimg from '$lib/images/welcome-html-black.png?w=340&h=195&format=webp&imagetools';
	import codeimg_retina from '$lib/images/welcome-html-black.png?w=680&h=390&format=webp&imagetools';
	import videobackground from '$lib/images/web_development_video_background.mp4';

	let className = '';
	export { className as class };
</script>

<div class={`obj:cover overflow:hidden` + className}>
	<img
		srcset={`${codeimg}, ${codeimg_retina} 2x`}
		src={codeimg}
		alt="web development javascript code snippet illustration"
		class="codeimg3 block rel h:195 w:340 z:20 left:-150 top:280 transform:rotate(5deg) transform:bottom|right ~all|300ms|ease-in ~delay:300ms box-shadow:3|3|10|black/.75 r:15
			"
	/>
	<img
		srcset={`${codeimg}, ${codeimg_retina} 2x`}
		src={codeimg}
		alt="web development typescript code snippet illustration"
		class="h:195 w:340 codeimg2 block rel z:20 left:-150 top:85 transform:rotate(5deg) transform:bottom|right transform:bottom|right ~all|300ms|ease-in ~delay:200ms box-shadow:3|3|10|black/.75 r:15
			"
	/>
	<img
		srcset={`${codeimg}, ${codeimg_retina} 2x`}
		src={codeimg}
		alt="web development svelte code snippet illustration"
		class="h:195 w:340 codeimg1 block rel z:90 left:-150 top:-110 transform:rotate(5deg) transform:bottom|right transform:bottom|right ~all|300ms|ease-in ~delay:100ms box-shadow:3|3|10|black/.75 r:15
			"
	/>
	<img
		srcset={`${oskar_img}, ${oskar_img_x2} 2x`}
		src={oskar_img}
		alt=""
		class="rel left:60 top:-585 brightness(0) h:420 w:295 z:80"
	/>
	<img
		srcset={`${oskar_img}, ${oskar_img_x2} 2x`}
		src={oskar_img}
		alt="web developer"
		class="rel left:50 top:-1005 h:420 w:295 z:80
			"
	/>
	<video
		autoplay
		loop
		muted
		disablepictureinpicture
		disableremoteplayback
		class={`rel blend:screen h:420 w:full top:-1439 left:85 `}
		title="web development code rain background"
	>
		<source src={videobackground} />
		<track kind="captions" />
	</video>
	<div
		class="cyanShape bg:rgba(0,228,224,0.713) w:100 h:100 rel left:32 top:-1640 transform:rotate(0deg) z:10 ~all|500ms|ease-in-out ~delay:500ms"
	/>
	<div
		class="crimsonShape bg:crimson/.9 w:150 h:300 rel left:120 top:-1880 transform:rotate(-20deg) z:10 ~all|1100ms|ease-in-out ~delay:300ms"
	/>
	<div
		class="blueShape bg:blue/.5 w:150 h:250 rel left:20 top:-2210 transform:rotate(-50deg) rtr:200 z:10 ~all|800ms|ease-in-out ~delay:300ms"
	/>
	<div
		class="orangeShape bg:orange w:150 h:190 rel left:100 top:-2350 transform:translate(0)rotate(55deg) z:70 ~all|300ms|ease-in-out ~delay:100ms
	
	"
	/>
	<div
		class="greenShape opacity:0 bg:rgb(16,226,100) w:30 h:30 r:0 rel left:-80 top:-2520 transform:rotate(20deg) z:0 ~all|2s|ease-in-out ~delay:1.5s"
	/>
</div>

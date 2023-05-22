<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import BannerMe from '$lib/modules/landing/BannerMe.svelte';
	import { getTranslate } from '@tolgee/svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { t } = getTranslate();
</script>

<div
	class="rel transform:rotate(2deg):hover_.codeimg1 transform:rotate(7deg):hover_.codeimg2 transform:rotate(12deg):hover_.codeimg3
	transform:translate(0,-20px)rotate(55deg):hover_.orangeShape transform:translate(0,-20px)rotate(55deg):hover_.orangeShape
	transform:translate(-20px,-17px):hover_.cyanShape
	transform:translate(20,-80)rotate(-15deg):hover_.crimsonShape
	transform:translate(2,0):hover_.oskarshadow
	transform:translate(-2,0):hover_.oskarimg
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
		<div class="flex gap:10 h-min:fit ai:end">
			<div class="m:0|0|0|0 pr:100@sm w:full">
				<h1 class="f:bold f:30 f:60@md">
					{$t('hello_world', 'Hello, world')}! <br /><span class="f:30 f:60@md"
						>{$t('i_am', `I'm`)} Oskar,</span
					>
				</h1>
				<p class="">
					{$t('landing_hello_world_hero')}
				</p>
				<div class="flex jc:center p:20 my:20">
					<Button href={data.lang === 'en' ? 'contact' : data.lang + '/contact'}
						>{$t('connect', `Let's connect`)}</Button
					>
				</div>
			</div>
			<BannerMe class="banner hidden flex@sm ac:end" />
		</div>
	</div>
</div>

<!-- <div class=" mt:20 bg:green w:full h:300 z:90">Test</div>
<div class=" mt:20 bg:red w:full h:300 z:90">Test</div>
<div class=" mt:20 bg:blue w:full h:300 z:90">Test</div> -->

<!-- <T keyName="key" defaultValue="This is default" />
	
	OR
	
	{$t('this_is_a_key')} -->

<svelte:head>
	<title>{$t('homepage_head_title')}</title>
	<meta name="description" content={$t('homepage_head_meta_description')} />
	<meta name="keywords" content={$t('homepage_head_meta_keywords')} />
	<link rel="canonical" href={$t('homepage_head_canonical_link')} />

	<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Oskar Gmerek",
      "jobTitle": "Web Developer",
      "description": "Oskar Gmerek is a web developer specializing in creating functional, aesthetic, and responsive websites. He loves to use the latest trends and technologies to deliver innovative solutions.",
      "image": "https://oskargmerek.com/img/web_developer_oskar_gmerek.png",
      "sameAs": [
        "https://www.linkedin.com/in/oskar-gmerek",
        "https://github.com/oskar-gmerek"
      ]
    }
	</script>
	<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "headline": "Hello, world! I'm Oskar - Web Developer",
      "description": "A web developer specializing in creating functional, aesthetic, and responsive websites.",
      "author": {
        "@type": "Person",
        "name": "Oskar Gmerek"
      },
      "url": "https://oskargmerek.com"
    }
	</script>
	<script type="application/ld+json">
	 {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://oskargmerek.com",
      "logo": "https://oskargmerek.com/img/OGmonogram.svg"
    }

	</script>
</svelte:head>

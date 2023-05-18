<script lang="ts">
	import type { LayoutData } from './$types';
	import TopNav from '$lib/components/TopNav.svelte';
	import { getTranslate } from '@tolgee/svelte';

	export let data: LayoutData;

	const { t } = getTranslate();
	$: items = [
		{
			label: $t('nav_home', 'Home'),
			href: `/${data?.lang === 'en' ? '' : data?.lang}`,
			title: $t('nav_home_title', 'Web Developer West Sussex')
		},
		{
			label: $t('nav_contact', 'Contact'),
			href: `/${data?.lang === 'en' ? 'contact' : data?.lang + '/contact'}`,
			title: $t('nav_contact_title', 'Contact Oskar Gmerek')
		}
	];
</script>

<TopNav {items} />
<main class="app max-w:lg m:auto mt:120">
	<slot />
</main>

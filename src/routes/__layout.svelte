<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { replaceLocaleInUrl } from '../utils'
	import { baseLocale, locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	import type { Locales } from '$i18n/i18n-types';

	// type LoadInput = {
	// 	PageParams: { lang?: Locales }
	// 	Session: SessionPayload
	// }

	type LoadInput = {
		lang?: Locales
	}

	export const load: Load<LoadInput> = async ({params, session, url}) => {

		// fallback needed because of https://github.com/sveltejs/kit/issues/3647
		const lang = params.lang || (url.pathname.split('/')[1] as Locales)
		// redirect to preferred language if user comes from page root
		if (!lang) {
			return {
				status: 302,
				redirect: `/${session.locale}`,
			}
		}
		// redirect to base locale if language is not present
		if (!locales.includes(lang)) {
			return {
				status: 302,
				redirect: replaceLocaleInUrl(url.pathname, baseLocale),
			}
		}
		// delete session locale since we don't need it to be sent to the client
		delete session.locale
		await loadLocaleAsync(lang)
		return { props: { locale: lang } }
	}
</script>

<script lang="ts">
		import '../app.css';
		import Header from '$lib/header/Header.svelte'
		import { setLocale } from '$i18n/i18n-svelte'
		export let locale: Locales
		setLocale(locale)
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

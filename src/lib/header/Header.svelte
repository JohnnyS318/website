<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header class="flex absolute w-full justify-center items-center">
	<nav class="nav grid items-center justify-center bg-white h-full px-12 rounded-b-xl" style="grid-template-columns: auto 1fr;">
		<div class="">
			<h3 class="font-sans text-3xl py-3 font-medium">Jonas Schneider</h3>
		</div>
		<ul class="nav-list list-none flex flex-row items-center justify-center ml-32 text-black">
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === "/contact"}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
			<li class:active={$page.url.pathname === "/blog"}>
				<a href="/blog">Blog</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style lang="postcss">

.nav{
	border-color: black;
	border: solid 1px;
	border-top: 0px;
}
.nav-list li{
	@apply font-serif font-medium text-xl;
	display: flex;
	margin: 0 16px;
}
</style>
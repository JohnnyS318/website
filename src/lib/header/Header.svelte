<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header class="flex fixed top-0 w-full justify-center items-center px-16">
	<nav class="nav grid items-center justify-center px-12 rounded-b-xl w-full backdrop-blur-sm shadow-md" style="grid-template-columns: auto 1fr auto">
		<a sveltekit:prefetch href="/" class="mr-16">
			<h3 class="font-sans text-3xl py-3 font-medium">Jonas Schneider</h3>
		</a>
		<div class="w-full rounded grid relative">
			<input placeholder="Search..." class="h-full w-full py-2 px-4 bg-transparent placeholder:text-black text-black z-10 font-sans"/>
			<div class="bg-gray-800 opacity-25 min-w-full min-h-full top-0 left-0 z-0 absolute rounded">&nbsp</div>
		</div>
		<ul class="nav-list list-none flex flex-row items-center justify-center ml-16 text-black justify-self-end">
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
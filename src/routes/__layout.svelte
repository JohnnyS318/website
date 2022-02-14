<script lang="ts">
		import '../app.css';
		import Header from '$lib/header/Header.svelte'

</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
		margin: 0;
		padding:0;
		box-sizing: border-box;
	}
</style>

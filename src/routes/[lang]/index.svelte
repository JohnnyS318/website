<script context="module" lang="ts">
  import LL from "$i18n/i18n-svelte";
  
  
    export const prerender = true;
  </script>
  
  <svelte:head>
    <title>Home</title>
  </svelte:head>
  
  <section>
    <h1 class="text-black">{$LL.construction()}</h1>
  </section>
  
  <style>
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
  
    h1 {
      width: 100%;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 10rem;
    }
  </style>
  
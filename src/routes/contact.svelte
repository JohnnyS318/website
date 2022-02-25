<script lang="ts">
  import Typewriter from "svelte-typewriter";
  let showContent = false;

  function done(){
    setTimeout(() => {
      showContent = true;
    }, 200)
  }
</script>

<section class="flex flex-col">
  <div class="header flex justify-center items-center my-60 w-full">
    <Typewriter cascade on:done={() => done()} delay={50}>
      <h1 class="font-sans md:text-8xl font-semibold text-black">
        Hi i'm Jonas Schneider.
      </h1>
      <h3 class="font-sans text-center font-light text-black text-3xl"><a href="mailto:jonas.max.schneider@gmail.com" class="text-black">Email me!</a></h3>
    </Typewriter>
  </div>
  <div class="">
    <svg viewBox="0 0 100 100" height="1000px" width="100%" class="absolute anim transition-opacity duration-300 {!showContent ? "opacity-0" : "opacity-85"}">
      <line class="draw" stroke-linejoin="round" stroke="black" fill="none" stroke-width="0.25"  x1="50" y1="0" x2="50" y2="100" />
    </svg>
  </div>
</section>

<style>
  .anim{
  }
</style>
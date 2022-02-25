<!-- src/routes/blog/index.svelte -->
<script context="module" lang="ts">
    export const load = async ({ fetch }) => {
        const posts = await fetch('/api/posts')
        const allPosts = await posts.json()

        return {
            props: {
                posts: allPosts
            }
        }
    }
</script>

<script>
    export let posts;
</script>
  
<section class="h-screen">
    <div class="header h-2/3 grid grid-cols-2 border-b-2 border-black">
        <div class="border-r-2 border-black flex justify-center items-center h-full">
            <h1 class="font-serif text-9xl font-semibold text-black">Blog Posts</h1>
        </div>
        <div class="font-serif text-4xl font-medium text-black"></div>
    </div>
    <div>
        <div class="latest grid h-96 bg-black text-white justify-center items-center">
            <h2 class="text-5xl font-serif flex w-full h-full justify-center items-center border-r-2 border-white">Latest Posts</h2>
            <div>
                <ul>
                    {#each posts.slice(0,4) as post}
                        <li class="w-full px-24 my-6"><a class="block py-3 text-center border-y-2 border-white w-full font-serif text-2xl" href={post.path}>{post.meta?.title}</a></li>
                    {/each}
                </ul>
            </div>
            <h2 class="absolute bottom-0 right-0">All</h2>
        </div>
    </div>
    <div>
        <div class="bg-red-700 text-white font-sans py-16">
            <h2 class="font-serif text-6xl text-center">Political Posts</h2>
            <hr class="mt-16 h-2"/>
        </div>
    </div>
    <div class="bg-green-700">
        <div class=" text-white font-sans py-16">
            <h2 class="font-serif text-9xl px-16">Development <br> Posts.</h2>
        </div>
        <hr class="mt-96 h-0"/>
        <div class="languages grid grid-cols-5 text-white font-serif text-3xl">
            <div class="border-r-2 border-white grid justify-center items-center">
                <h4>Golang</h4>
            </div>
            <div class="border-r-2 border-white grid justify-center items-center">
                <h4>Javascript</h4>
            </div>
            <div class="border-r-2 border-white grid justify-center items-center">
                <h4>C#</h4>
            </div>
            <div class="border-r-2 border-white grid justify-center items-center">
                <h4>Python</h4>
            </div>
            <div class="grid justify-center items-center">
                <h4>More...</h4>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    .header {
        background: rgb(255, 210, 0);
    }

    .latest{
        grid-template-columns: 1fr 2fr;
    }

    .languages h4 {
        @apply py-16;
    }
</style>
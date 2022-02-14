<!-- src/routes/blog/index.svelte -->
<script context="module">
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
    import Typewriter from "svelte-typewriter"
    export let posts
</script>
  
<div>
    <div class="header bg-yellow-400 py-48 grid grid-cols-2">
        <h1 class="font-serif text-8xl font-semibold text-black">Blog Posts</h1>
        <div class="font-serif text-4xl font-medium text-black">
        </div>
    </div>
    <div>
        <ul>
            {#each posts as post}
                <li>
                <h2>
                    <a href={post.path}>
                    {post.meta.title}
                    </a>
                </h2>
                Published {post.meta.date}
                </li>
            {/each}
        </ul>
    </div>
</div>
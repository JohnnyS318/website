<script>
    export let title
    export let date
</script>

<div>
    
    <div class="header grid place-items-center">
        <h1 class="font-sans font-semibold text-6xl my-16 text-black bg-gray-200 flex w-auto py-6 px-16 rounded-lg">{title}</h1>
    </div>
    
    <p>Published: {date}</p>
    
    <div class="">
        <slot />
    </div>
</div>
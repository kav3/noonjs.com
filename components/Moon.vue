<script setup lang="ts">
const craters = [
    'mt-14 ms-8 w-8 h-8 bg-zinc-200', 
    'mt-10 ms-4 w-16 h-16 bg-zinc-200', 
    'mt-40 -ms-24 w-10 h-10 bg-zinc-200',
    'mt-48 ms-8 w-20 h-20 bg-zinc-200 border-2 border-white', 
    'mt-56 -ms-32 w-6 h-6 bg-zinc-200 border border-white', 
    'mt-20 ms-24 w-6 h-6 bg-zinc-200 border border-white', 
    'mt-40 ms-0 w-10 h-10 bg-zinc-200 border border-white', 
    'mt-28 -ms-6 w-6 h-6 bg-zinc-200 border border-white', 
    'mt-40 -ms-28 w-6 h-6 bg-zinc-200 border border-white'
]
</script>
<template>
    <span class="flex moon size-72 absolute left-1/2 transform -translate-x-1/2 translate transition-all duration-700">
        <span class="flex bg-white w-72 h-72 rounded-full shadow-zinc-200 shadow-[inset_-16px_-16px_5px_5px]">
            <span v-for="c in craters" class="flex-none rounded-full shadow-inner" :class="c"></span>
        </span>
    </span>

</template>
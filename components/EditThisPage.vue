<script setup lang="ts">
    const route = useRoute()
</script>
<template>
    <nuxt-link :to="`https://github.com/noonjs/noonjs.com/edit/main${route.path}.vue`" target="_blank">
        <span class="flex gap-1 items-center p-3 rounded-md text-xs text-gray-600 justify-end">
            <icon-github class="size-8" />
            <span>Edit this page on Github</span>
        </span>
    </nuxt-link>

</template>
<script setup lang="ts">
const { $color } = useNuxtApp()
defineProps({
    code: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        default: "ts"
    }
})
</script>
<template>
    <span class="flex flex-1 w-full border dark:border-zinc-800 rounded-md bg-white dark:bg-[#1f1f1f] p-4">
        <Shiki :lang :code :key="`${lang}-${$color}`"
            class="flex whitespace-pre-wrap break-words max-h-64 overflow-auto w-full"
            :highlightOptions="{ theme: $color === 'dark' ? 'min-dark' : 'min-light', unwrap: true }" />
    </span>
</template>
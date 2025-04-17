<script setup lang="ts">
const props = defineProps(["text"])
const copied = ref(false)
async function copy() {
    try {
        await navigator.clipboard.writeText(props.text);
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 1000)
    } catch (err) {

    }
}
</script>
<template>
    <button @click="copy" class="flex btn !gap-2 border border-zinc-600 px-2 py-1 rounded-md items-center">
        <icon-terminal />
        <span class="flex">{{ text }}</span>
        <icon-copy v-if="!copied" />
        <icon-check v-else class="animate-ping text-lime-600" />
    </button>
</template>
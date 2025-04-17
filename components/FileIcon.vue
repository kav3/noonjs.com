<script setup lang="ts">
defineProps(["ext"])
</script>
<template>
    <icon-ts v-if="ext==='ts'" />
    <icon-js v-if="ext==='js'" />
    <icon-json v-if="ext==='json'" />
    <icon-api v-if="ext==='rest'" />
    <icon-env v-if="ext==='env'" />
    <icon-md v-if="ext==='md'" />
</template>
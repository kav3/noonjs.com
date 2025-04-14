<script setup lang="ts">
const title = "Deployment"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <p>Use the <span class="tag">build</span> command to compile your project for production. You can then deploy it using Docker or PM2.
            </p>
            <span class="flex">
                <command text="npm run build" />
            </span>
        </section>
    </span>
</template>
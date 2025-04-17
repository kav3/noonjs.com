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
            <p>Use the <span class="tag">build</span> command to compile your project for production. You can then deploy it using <span class="tag">Docker</span> or <span class="tag">PM2</span>.
            </p>
            <span>
                <command text="npm run build" />
            </span>
        </section>

        <section>
            <h2>Run</h2>
            <p>To run, simply enter this command.</p>
            <span>
            <command text="node ./dist/index.cjs" />

            </span>
        </section>
    </span>
</template>
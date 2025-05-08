<script setup lang="ts">
const title = "Stop"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <p>
                <span class="tag">Gracefully</span> shuts down the noonjs server by closing all active connections and cleaning up resources.
            </p>

            <my-shiki lang="js" code='...
   
noonjs.stop()

...' />
        </section>

    </span>
</template>

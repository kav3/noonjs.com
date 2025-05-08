<script setup lang="ts">
const title = "Start"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <p>
                Starts the noonjs server by initializing all configured services and begins listening for incoming HTTP
                and WebSocket connections on the defined port in <span class="tag">config.json</span> or <span
                    class="tag">environment variables</span>.
            </p>

            <my-shiki lang="js" code='...
   
noonjs.start()

...' />
        </section>

        <section class="info">
            <h4>Default Port</h4>
            <p>By default, noonjs runs on port <span class="tag info">4000</span>.</p>
        </section>

    </span>
</template>

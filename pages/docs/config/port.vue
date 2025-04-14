<script setup lang="ts">
useHead({
    title: 'Port Config'
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Port</h1>
            <p>
                noonjs uses port 4000 to serve the API and Socket. The port can be changed in <span
                    class="tag">config.json</span> or via an environment variable.
            </p>
            <my-shiki lang="json" code='{
...
    "port": 4000,
...
}' />
        </section>

        <section class="info">
            <h4>Environment variables</h4>
            <p>Alternatively, environment variables like <span class="tag">PORT=4000</span> achieve the same result.
                noonjs prioritizes <span class="tag important">environment variables</span> over config.json, and if
                neither is set, a default port is applied.</p>
        </section>
    </span>
</template>

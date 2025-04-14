<script setup lang="ts">
const title = "CORS"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <h2>cors()</h2>
            <p>
                noonjs supports <span class="tag">CORS</span>. If CORS is not defined in the config, the server
                will have no CORS restrictions. To enable CORS, simply add your origin to the config. If you need to
                support cookies, set <span class="tag">credentials</span> to <span class="tag">true</span> as well.
            </p>
            <my-shiki lang="json" code='{
...
    "cors": {
        "origin": "my-domain.com",
        "credentials": true
    }
...
}' />
        </section>

        <section class="info">
            <h4>Environment variables</h4>
            <p>Alternatively, environment variables like <span class="tag">CORS_ORIGIN=my-domain.com</span> and <span
                    class="tag">CORS_CREDENTIALS=true</span> achieve the same result. noonjs prioritizes <span
                    class="tag important">environment variables</span> over config.json.</p>
        </section>
    </span>
</template>

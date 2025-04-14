<script setup lang="ts">
const title = "Limiter"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <h2>express-rate-limit</h2>
            <p>
                In noonjs, request rate limiting is handled using the <span class="tag">express-rate-limit</span>
                middleware to prevent abuse and ensure fair API usage. The configuration can be set through <span
                    class="tag">config.json</span> or environment variables. The <span class="tag">window</span> option
                defines the time window in milliseconds during which requests are counted, and <span
                    class="tag">limit</span> specifies the maximum number of allowed requests within that window. If
                rate limiting is not needed, you can disable it by setting it to <span class="tag">false</span> or
                removing the <span class="tag">limiter</span> entry from the configuration.
            </p>
            <my-shiki lang="json" code='{
...
    "limiter": {
        "window": 60000,
        "limit": 100
    }
...
}' />
        </section>

        <section class="info">
            <h4>Environment variables</h4>
            <p>Alternatively, environment variables like <span class="tag">LIMITER_WINDOW=60000</span> and <span
                    class="tag">LIMITER_LIMIT=100</span> achieve the same result. noonjs prioritizes <span
                    class="tag important">environment variables</span> over config.json. However, both parameters must
                be provided; if either is missing, the limiter will be ignored.</p>
        </section>
    </span>
</template>

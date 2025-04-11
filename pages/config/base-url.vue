<script setup lang="ts">
useHead({
    title: 'Base Url Config'
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Base Url</h1>
            <h2>/api</h2>
            <p>
                noonjs does not enforce a default base URL like <span class="tag">/api</span>, but you can define one
                using <span class="tag">config.json</span> if needed.
            </p>
            <my-shiki lang="json" code='{
...
    "base": "/api/v1",
...
}' />
        </section>

        <section>
            <h2>Environment variables</h2>
            <p>Alternatively, environment variables like <span class="tag">BASE=/api</span> achieve the same result.
                noonjs prioritizes <span class="tag important">environment variables</span> over config.json.</p>
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>If the base Url changes, all collections and auth endpoints will also change.</p>
        </section>
    </span>
</template>

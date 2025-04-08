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
    "baseurl": "/api/v1",
...
}' />
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>If the base Url changes, all collections and auth endpoints will also change.</p>
        </section>
    </span>
</template>

<script setup lang="ts">
const title = "Debug"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <p>
                You can set debug levels like this <span class="tag info">app:info</span>, <span class="tag important">app:warn</span>, <span class="tag important">app:error</span>, or combine them as <span class="tag">app:info,warn</span>. Use <span class="tag">app:*</span> to enable all levels.
            </p>
            <my-shiki lang="json" code='{
...
    "debug": "app:*"
...
}' />
        </section>

        <section class="info">
            <h4>Environment variables</h4>
            <p>Alternatively, environment variables like <span class="tag">DEBUG=app:*</span> achieve the same result. noonjs prioritizes <span
                    class="tag important">environment variables</span> over config.json.</p>
        </section>
    </span>
</template>

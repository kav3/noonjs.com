<script setup lang="ts">
const title = "Config"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <p>
                All collection endpoints with JWT authentication are automatically generated from this <span
                    class="tag">config.json</span> file, following the permissions defined within
            </p>
            <my-shiki lang="json" code='{
...
    "auth": {},
    "collections": {
            "users": {
                "schema": {},
                "permissions": {}
            }
    }
...
}' />
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>Restart the server after modifying <span class="tag important">config.json</span></p>
        </section>
    </span>
</template>

<script setup lang="ts">
const title = "Use"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <h2>noonjs.use(path?, handler)</h2>
            <p>
                Registers <span class="tag">middleware</span> functions or <span class="tag">Express routers</span>
                within the noonjs application. Can be used to apply global middleware, mount specific routes, or integrate third-party Express-compatible handlers.
            </p>

            <ul>
                <li>
                    If only a handler is provided: it is applied globally.
                </li>
                <li>
                    If both path and handler are provided: the handler is mounted on the given path.

                </li>
            </ul>

            <my-shiki lang="js" code='...
   
noonjs.use(someMiddleware); // Global middleware
noonjs.use("/api/custom", customRouter); // Mounts custom Express router
   
...' />
        </section>

    </span>
</template>

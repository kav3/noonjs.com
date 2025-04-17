<script setup lang="ts">
useHead({
    title: 'MongoDb Config'
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>MongoDb</h1>
            <h2>mongoose</h2>
            <p>
                noonjs uses Mongoose to interact with MongoDB. The connection string can be configured in <span
                    class="tag">config.json</span> or set via an environment variable.
            </p>
            <my-shiki lang="json" code='{
...
    "mongodb": "mongodb+srv://...",
...
}' />
        </section>

        <section class="info">
            <h4>Environment variables</h4>
            <p>Alternatively, environment variables like <span class="tag">MONGODB=mongodb+srv://...</span> achieve the
                same result.
                noonjs prioritizes <span class="tag important">environment variables</span> over config.json.</p>
        </section>

        <section>
            <h2>Free Cloud MongoDb</h2>
            <p>You can sign up for a free account on <span class="tag">mongodb.com</span> and create multiple free clusters for your applications. Additionally, consider adding a server or your <span class="tag">IP</span> to the network to allow database access.</p>
        </section>
    </span>
</template>

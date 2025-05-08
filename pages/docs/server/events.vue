<script setup lang="ts">
const title = "Events"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <h2>noonjs.on(event, callback)</h2>
            <p>
                Registers a listener for key lifecycle and connection-related events emitted by the noonjs server. This
                allows for custom handling and logging during server operations.
            </p>

            <my-shiki lang="js" code='...
   
noonjs.on("error", error => {
    console.log(error)
})

noonjs.on("started", port => {
    console.log(`✅ Server is running on http://localhost:${port}`)
})

...' />
        </section>

        <ul class="space-y-2">

            <li> <span class="tag">"started"</span>
                Triggered when the server has successfully started and is now listening for connections.</li>

            <li>
                <span class="tag">"stopped"</span>
                Triggered when the server has been gracefully stopped and all resources have been released.
            </li>
            <li>

                <span class="tag">"error"</span>
                Triggered when a critical error occurs during the server’s lifecycle. The callback receives the error
                object.
            </li>

            <li>
                <span class="tag">
                    "mongodb-connected"
                </span>
                Triggered when the MongoDB connection is successfully established.
            </li>

            <li>
                <span class="tag">"mongodb-disconnected"</span>
                Triggered when the MongoDB connection is lost or intentionally closed.
            </li>

            <li>
                <span class="tag">"socket-connected"</span>
                Triggered when a new Socket.IO client successfully connects.
            </li>

            <li>
                <span class="tag">"socket-disconnected"</span>
                Triggered when a connected Socket.IO client disconnects.
            </li>
        </ul>

    </span>
</template>

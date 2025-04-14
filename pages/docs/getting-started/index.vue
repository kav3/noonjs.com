<script setup lang="ts">
const title = "Introduction"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <h2>
                noonjs is a no-code backend framework that generates a secure MongoDB CRUD API with auth, permissions,
                and real-time Socket.IO events—powered by a simple config file.
            </h2>
            <p>
                noonjs is a powerful no-code backend framework that instantly generates a fully functional MongoDB CRUD
                API with built-in authentication, fine-grained permission control, and real-time Socket.IO events for
                database changes—all driven by a simple configuration file. Designed for speed and flexibility, noonjs
                empowers developers to build and customize robust APIs without writing boilerplate code. Whether you're
                prototyping or going to production, noonjs makes backend development seamless, secure, and reactive.
            </p>

            <h2>Key features</h2>
            <ul>
                <li>Authentication & Authorization with permission-based access control</li>
                <li>Auto-generated CRUD endpoints for every defined schema</li>
                <li>Smart defaults with customizable behavior</li>
                <li>Real-time support using Socket.IO</li>
                <li>Refresh token support for secure sessions</li>
                <li>Minimal setup, maximum control</li>
            </ul>

            <h2>Client</h2>
            <p>noonjs also comes with its own TypeScript client that supports all its features out of the box. You can
                install it and start interacting with your API immediately, including full CRUD operations,
                authentication, real-time updates, and more—without writing any manual API calls.</p>
        </section>




    </span>
</template>

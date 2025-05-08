<script setup lang="ts">
const title = "Clients"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">

        <section class="important">
            <h4>Important</h4>
            <p>
                Using the noonjs Client is totally optional. Feel free to interact with the backend the old-school
                way via <nuxt-link to="/clients/rest">REST</nuxt-link> & Socket.IO.
            </p>
        </section>

        <h1>Clients</h1>
        <a id="js-client"></a>

        <section>
            <h2>JS</h2>
            <p>
                The noonjs Client is a TypeScript-based library designed to seamlessly interact with the noonjs
                backend.
                It eliminates the need for manual API calls by automatically generating request methods based on the
                defined schemas in <span class="tag">config.json</span>.
            </p>
        </section>

        <section>
            <h3>Installation</h3>
            <p>
                To install the noonjs Client, use npm, yarn, or pnpm:
            </p>
            <span class="flex">
                <command text="npm install noonjs-client@latest" />
            </span>
        </section>

        <section>
            <h3>How to use</h3>
            <my-shiki code='import Client from "noonjs-client";

const client = new Client({ server: "https://localhost:5000" }); // my-noon-server
' />
            <p class="hint">
                Server property is optional
            </p>
        </section>

        <section>
            <h3>Some CRUD</h3>
            <span>
                Define the 'todos' collection in <span class="tag">config.json</span>, ensuring that the <span
                    class="tag important">permissions</span> property is set to * to grant full access.
            </span>
            <my-shiki lang="json" code='{
    "collections": {
        "todos": {
            "schema": {
                "title": {
                    "type": "string"
                },
                "done": {
                    "type": "number"
                }
            },
            "permissions": {
                "*": true
            }
        }
    }
}' />

            <span>To add a new todo item to the 'todos' collection using the noonjs client, use the following
                command. This example adds a todo with the title 'Buy milk'.</span>

            <my-shiki code='const todo = await client.collection("todos").post({ title: "Buy milk" });' />

            <span>To fetch all todo items from the 'todos' collection using the noonjs client, use the following
                command. Need more details on <nuxt-link
                    to="/docs/clients/js/collections/get">pagination</nuxt-link>?</span>

            <my-shiki code='const todos = await client.collection("todos").get();' />

        </section>


        <section id="react-client">
            <h2>React</h2>
            <p>
                Building something epic here. Sorry for the dust, we’ll clean up when we’re done!
            </p>
        </section>

        <section id="vue-client">
            <h2>Vue</h2>
            <p>
                Client under construction: We’ve got builders, architects, and a few squirrels working on this!
            </p>
        </section>

        <section id="nuxt-client">
            <h2>Nuxt</h2>
            <p>
                Warning: This client is under construction. Proceed with caution. Magic is happening!
            </p>
        </section>



    </span>
</template>
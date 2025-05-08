<script setup lang="ts">
const title = "Hello world"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <p>
                noonjs allows you to easily extend your backend by attaching custom Express routers.
                This is helpful when you want to add custom endpoints outside of the auto-generated CRUD routes.
            </p>

            <my-shiki lang="js" code='import Noonjs from "noonjs"
import config from "../config.json"
import express from "express"

const noonjs = new Noonjs(config)

const router = express.Router()

router.get("/hello", (req, res) => {
    res.send("world")
})

noonjs.use(router)

noonjs.start()' />

            <p>
                In the example above, a custom Express router is created using <span class="tag">express.Router()</span>. 
                A simple GET route <span class="tag">/hello</span> is defined that responds with the string "world". 
                This router is then attached to the noonjs instance using <span class="tag">noonjs.use(router)</span>. 
                Finally, <span class="tag">noonjs.start()</span> is called to launch the server, combining both the auto-generated CRUD routes and your custom ones.
                This approach provides flexibility to add your own logic alongside Noonjs's automatic functionality.
            </p>
        </section>
    </span>
</template>

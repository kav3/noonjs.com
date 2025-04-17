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
                This is the minimum configuration required for noonjs — just a single collection like <span
                    class="tag">todos</span>, <span class="tag">users</span>, <span class="tag">people</span>, <span
                    class="tag">products</span>, and so on.
            </p>
            <my-shiki lang="json" code='{
    "collections": {
        "todos": {
            "schema": {
                "title": {
                    "type": "string"
                }
            },
            "permissions": {
                "*": true
            }
        }
    }
}' />
            <p>With this, everyone has access to <span class="tag">todos</span> collection and can perform <span
                    class="tag">create</span>, <span class="tag">read</span>, <span class="tag">update</span>, and <span
                    class="tag">delete</span>
                operations.</p>
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>Restart the server after modifying <span class="tag important">config.json</span></p>
        </section>

        <section>
            <h2>More Options</h2>
            <p>In this example, additional options are included in the configuration, such as <span
                    class="tag">auth</span>, <span class="tag">CORS</span>, <span class="tag">IO</span>, <span class="tag">limiter</span>, and more.
            </p>
            <my-shiki lang="json" code='{
    "debug": "app:*",
    "limiter": {
        "window": 60000,
        "limit": 100
    },
    "io": false,
    "cors": {
        "origin": "https://my-domain.com",
        "credentials": true
    },
    "error": {
        "method_not_allowed": "Apologies, you do not have access."
    },
    "auth": {
        "username": "cellphone",
        "password": "password",
        "access": 900,
        "refresh": 31536000
    },
    "collections": {
        "todos": {
            "schema": {
                "title": {
                    "type": "string"
                }
            },
            "permissions": {
                "*": true
            }
        }
    }
}' />
        </section>
    </span>
</template>

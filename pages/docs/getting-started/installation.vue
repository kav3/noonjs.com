<script setup lang="ts">
const title = "Installation"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <p>
                To get started with NoonJS, make sure you have the following installed on your system:
            </p>
            <ul>
                <li>Node.js (v18 or later recommended)</li>
                <li>MongoDB (local or remote instance)</li>
                <li>No IDE required — just edit <span class="tag">config.json</span> using Vim or Notepad.</li>
            </ul>

            <h2>First Time</h2>
            <p>
                Open a terminal and run the following command to create a new project. If you don't have a config.json,
                noonjs will generate a default one for you.
            </p>

            <span class="flex">
                <command text="npm create noon" />
            </span>

            <p>The default configuration should look like this.</p>
            <my-shiki lang="json" code='{
    "auth": {
        "collection": "users",
        "secret": "your-primary-secret", 
        "refreshsecret": "your-secondary-secret", 
        "username": "username", 
        "password": "password",
        "access": 900,
        "refresh": 31536000
    },
    "collections": {
        "users": {
            "schema": {
                "username": {
                    "type": "string",
                    "unique": true
                },
                "password": {
                    "type": "hash"
                },
                "permissions": {
                    "type": "array",
                    "default": ["user"]
                }
            },
            "permissions": {
                "*": {
                    "post": true
                },
                "user": {
                    "get": {
                        "q": {
                            "_id": "$.auth._id"
                        },
                        "project": "-password"
                    },
                    "patch": {
                        "pick": ["username"],
                        "q": {
                            "_id": "$.auth._id"
                        },
                        "io": {
                            "$._id": ["_id"],
                            "admin": true
                        }
                    }
                },
                "admin": {
                    "get": true,
                    "post": {
                        "io": {
                            "$._id": ["_id"],
                            "admin": true
                        }
                    },
                    "patch": {
                        "io": {
                            "$._id": ["_id"],
                            "admin": true
                        }
                    },
                    "delete": {
                        "io": {
                            "$._id": ["_id"],
                            "admin": true
                        }
                    }
                }
            }
        }
    }
}' />

            <p>Customize the config.json file to fit your project's needs, then start the development server with the
                following command:</p>

            <span class="flex">
                <command text="npm run dev" />
            </span>

        </section>

        <section class="important">
            <h4>Important</h4>
            <p>Be sure to change the <span class="tag important">secret</span> and <span
                    class="tag important">refreshSecret</span> values before using in production.</p>
        </section>
    </span>
</template>

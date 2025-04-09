<template>
    <span class="flex flex-col gap-2">

        <section>
            <h1>Permissions</h1>
            <p>noonjs uses a <span class="tag">permissions-based</span> system with <span class="tag">*</span> for
                visitors. If a role, such as "<span class="tag">admin</span>" is set to true, it grants full
                permissions, allowing the admin to create, read, update, and delete without any restrictions. If <span
                    class="tag">*</span> is set to true, everyone has full access to the collection. The system allows
                customization of the four methods <span class="tag">GET</span>, <span class="tag">POST</span>, <span
                    class="tag">PATCH</span>, and <span class="tag">DELETE</span> for each role.</p>
        </section>

        <section>
            <h2>Global Permissions</h2>
            <p>
                In this example, everybody has full access to the <code>todos</code> collection. Anyone can create,
                read, update, and delete todos without restriction.
            </p>
            <my-shiki lang="json" code='{
    "todos": {
        "schema": { ... },
        "permissions": {
            "*": true
        }
    }
}' />
        </section>

        <section>
            <h2>Role-Based Permissions</h2>
            <p>
                In this example, users can only read todos, while admins have full access to the <code>todos</code>
                collection.
            </p>
            <my-shiki lang="json" code='{
    "todos": {
        "schema": { ... },
        "permissions": {
            "user": {
                "get": true
            },
            "admin": true
        }
    }
}' />
        </section>

        <section>
            <h2>User-Specific Permissions</h2>
            <p>
                In this example, users can only read their own todos. They can post a new todo with only a title, and
                when a new document is added, a signal is sent to the respective user’s clients. Users can update their
                own todos, and after patching, no events are fired.
            </p>
            <my-shiki lang="json" code='{
    "todos": {
        "schema": { ... },
        "permissions": {
            "user": {
                "get": {
                    "q": {
                        "user": "$.auth._id"
                    }
                },
                "post": {
                    "pick": ["title"],
                    "io": {
                        "$.user": ["_id"]
                    }
                },
                "patch": {
                    "q": {
                        "user": "$.auth._id"
                    },
                    "pick": ["title"]
                }
            }
        }
    }
}' />
        </section>
    </span>
</template>

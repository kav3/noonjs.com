<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>IO</h1>
            <p>
                When a user <span class="tag info">successfully</span> updates a document, they receive only the document's <span
                    class="tag">_id</span> via <span class="tag">Socket.IO</span>. In contrast, administrators receive
                the entire updated
                document. This allows different permission levels to access only the data they need.
            </p>
            <my-shiki lang="json" code='{
    "collections": {
        "todos": {
            "schema": {...},
            "permissions": {
                "user": {
                    "patch": {
                        ...
                        "io": {
                            "$.user": ["_id"],
                            "admin": true
                        }
                    }
                }
            }
        }
    }
}' />
        </section>
    </span>
</template>

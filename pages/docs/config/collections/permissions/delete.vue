<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Delete</h1>
            <p>
                The <span class="tag">delete</span> permission controls how existing documents in a collection can be
                removed.
                It defines which documents can be deleted, how the operation is constrained,
                and which real-time events are triggered upon deletion.
            </p>
            <p>
                <span class="tag">q</span> Defines the query condition for deleting documents. This ensures that users
                can only remove documents matching specific criteria, such as ownership constraints.
            </p>
            <p>
                <span class="tag">io</span> Describes real-time events that should be triggered upon document
                deletion, specifying which users should receive notifications about the removal.
            </p>
            <my-shiki lang="json" code='{
    "collections": {
        "todos": {
            "schema": {...},
            "permissions": {
                "user": {
                    "delete": {
                        "q": {
                            "user": "$.auth._id"
                        },
                        "io": {
                            "$.user": ["_id"]
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

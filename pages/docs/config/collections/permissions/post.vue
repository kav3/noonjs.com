<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Post</h1>
            <p>
                The <span class="tag">post</span> permission controls how new documents are created in a collection.
                It defines which properties can be included in the request body, which ones should be omitted before
                database insertion,
                how the result is filtered, and which real-time events are triggered upon document creation.
            </p>
            <p>
                <span class="tag">pick</span> Specifies the allowed properties in the request body. Any property
                not listed
                here will be rejected.
            </p>
            <p>
                <span class="tag">omit</span> Properties to be removed from the request body before being stored in
                the
                database.
            </p>
            <p>
                <span class="tag">project</span> Defines the fields that should be included in the response after
                creating
                the document.
            </p>
            <p>
                <span class="tag">io</span> Describes real-time events that should be triggered upon document
                creation,
                specifying which users should receive notifications.
            </p>
            <my-shiki lang="json" code='{
    "collections": {
        "todos": {
            "schema": {...},
            "permissions": {
                "user": {
                    "post": {
                        "pick": ["title"],
                        "omit": ["user"],
                        "project": ["_id", "title"],
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

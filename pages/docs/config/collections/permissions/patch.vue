<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Patch</h1>
            <p>
                The <span class="tag">patch</span> permission controls how existing documents in a collection can be
                updated.
                It defines which properties can be modified, which ones should be omitted before database update,
                how the result is filtered after updating, and which real-time events are triggered upon modification.
            </p>
            <p>
                <span class="tag">pick</span> Specifies the allowed properties that can be updated in the request body.
                Any property
                not listed here will be ignored.
            </p>
            <p>
                <span class="tag">omit</span> Properties that should be removed from the request body before updating
                the
                database.
            </p>
            <p>
                <span class="tag">q</span> Defines the query condition for updating documents. This ensures that users
                can
                only modify documents matching specific criteria, such as ownership constraints.
            </p>
            <p>
                <span class="tag">project</span> Determines which fields should be included in the response after the
                update operation.
            </p>
            <p>
                <span class="tag">io</span> Describes real-time events that should be triggered upon document
                modification,
                specifying which users should receive notifications about the update.
            </p>
            <my-shiki lang="json" code='{
    "collections": {
        "todos": {
            "schema": {...},
            "permissions": {
                "user": {
                    "patch": {
                        "pick": ["title", "done"],
                        "omit": ["user"],
                        "q": {
                            "user": "$.auth._id"
                        },
                        "project": ["_id", "title", "done"],
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

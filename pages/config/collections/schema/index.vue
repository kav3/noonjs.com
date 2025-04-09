<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Schema</h1>
            <p>
                <span class="tag">noonjs</span> uses the same <span class="tag">schema</span> format as <span
                    class="tag">Mongoose</span> with some modifications. Every collection automatically includes an
                <span class="tag">_id</span> field of type ObjectId. It introduces a <span class="tag">hash</span> type
                for storing passwords securely and special default values like <span class="tag">$.auth._id</span> to
                reference the current user's <span class="tag">_id</span> and <span class="tag">$.now</span> for the
                current timestamp.
            </p>
            <my-shiki lang="json" code='...
{
    "schema": {
        "title": {
            "type": "string"
        },
        "body": {
            "type": "string"
        },
        "publishedAt": {
            "type": "number",
            "default": "$.now"
        },
        "user": {
            "type": "string",
            "default": "$.auth._id"
        }
    }
}
...' />
        </section>
    </span>
</template>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Number</h1>
            <p>
                The <span class="tag">number</span> type is a flexible data type used for storing numeric values. It can
                represent timestamps (milliseconds since epoch), simple numeric fields, or values used in comparisons.
                When used with the special default value <span class="tag">$.now</span>, it stores the current
                timestamp.
            </p>
            <my-shiki lang="json" code='...
{
    "schema": {
        "title": {
            "type": "string"
        },
        "publishedAt": {
            "type": "number",
            "default": "$.now"
        },
        "price": {
            "type": "number"
        },
        "score": {
            "type": "number",
            "default": 100
        }
    }
}
...' />
        </section>
    </span>
</template>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Default</h1>
            <p>
                The <span class='tag'>default</span> property assigns a predefined value when none is specified, or it
                can be enforced by <span class="tag important">omitting</span> values from the post.
            </p>
            <my-shiki lang="json" code='...
{
   "schema": {
        "user": {
            "type": "string",
            "default": "$.auth._id"
        },
		"publishedAt": {
			"type": "number",
			"default": "$.now"
		},
		"ip": {
			"type": "string",
			"default": "$.ip"
		},
        "title": {
            "type": "string"
        },
		"rate": {
			"type": "number",
			"default": 0
		}
    },
}
...' />

            <p>
                The <span class="tag">$.auth._id</span> value refers to the authenticated user's unique
                identifier (ID).
            </p>
            <p>
                The <span class="tag">$.now</span> value represents the current timestamp at the time the request is
                made.
            </p>
            <p>
                The <span class="tag">$.ip</span> value refers to the IP address of the client making the request.
            </p>
        </section>
    </span>
</template>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Post</h1>
            <p>
                This endpoint allows you to create a new resource in any collection. For example, the "todos" collection
                can be used to add a new to-do item. Every collection in your application can be used in the same way by
                replacing "todos" with the desired collection name.
                To use this endpoint, send a POST request to <span class="tag">/todos</span> with the data you want to
                create.
            </p>
            <my-shiki lang="json" code='POST /todos
            
{
    "title": "Buy groceries"
}' />
            <span class="hint">The request body should contain valid data based on the <span
                    class="tag">config.json</span> file for the specific collection. Once the resource is successfully
                created, a response with the newly created resource will be returned.</span>
        </section>

        <section class="info">
            <h4>Permissions</h4>
            <p>Ensure that the user has the necessary permissions to create a resource in the specified collection. The
                permissions are defined in the <span class="tag">config.json</span> file.</p>
        </section>

        <section>
            <h2>Limiting Allowed Properties</h2>
            <p>You can control which properties users are allowed to include in the request body by defining <nuxt-link
                    to="/config/permissions">permissions</nuxt-link> in
                <span class="tag">config.json</span>. The <span class="tag">pick</span> option specifies a list of
                allowed properties, and any property not listed will be ignored. The <span class="tag">omit</span>
                option specifies a list of disallowed properties, and any property listed will be removed from the
                request before processing.
            </p>


            <my-shiki lang="json" code='{
    "permissions": {
        "user": {
                "pick": ["title", "description"],
                "omit": ["user"]
        }   
    },
    "schema": {
        "title": { "type": "string" },
        "description": { "type": "string" },
        "user": { "type": "string" }
    }
}' />
        </section>


    </span>
</template>

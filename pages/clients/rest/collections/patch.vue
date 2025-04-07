<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Patch</h1>
            <p>
                This endpoint allows you to update an existing resource in any collection. For example, the "todos"
                collection
                can be used to update a to-do item. Every collection in your application can be updated in the same way
                by
                replacing "todos" with the desired collection name.
                To use this endpoint, send a PATCH request to <span class="tag">/todos/{id}</span> with the data you
                want to
                update.
            </p>
            <my-shiki lang="json" code='PATCH /todos/656f2b4e3f1a2b5d6c7e8f90
            
{
    "title": "Buy groceries and vegetables"
}' />
            <span class="hint">The request body should contain valid data based on the <span
                    class="tag">config.json</span> file for the specific collection. Once the resource is successfully
                updated, a response with the modified resource will be returned.</span>
        </section>

        <section class="info">
            <h4>Permissions</h4>
            <p>Ensure that the user has the necessary permissions to update a resource in the specified collection. The
                permissions are defined in the <span class="tag">config.json</span> file.</p>
        </section>

    </span>
</template>

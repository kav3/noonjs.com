<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Delete</h1>
            <p>
                This endpoint allows you to delete an existing resource from any collection. For example, the "todos"
                collection can be used to delete a to-do item. Every collection in your application can be deleted in
                the same way
                by replacing "todos" with the desired collection name.
                To use this endpoint, send a DELETE request to <span class="tag">/todos/{id}</span> to remove a
                specific resource.
            </p>
            <my-shiki lang="json" code='DELETE /todos/656f2b4e3f1a2b5d6c7e8f90' />
        </section>

        <section class="info">
            <h4>Permissions</h4>
            <p>Ensure that the user has the necessary permissions to delete a resource in the specified collection. The
                permissions are defined in the <span class="tag">config.json</span> file.</p>
        </section>
    </span>

</template>
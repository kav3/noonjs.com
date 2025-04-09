<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Collections</h1>
            <p>
                <span class="tag">MongoDB</span> stores data as documents, and a collection is a group of these
                documents. A <span class="tag">schema</span> defines the structure of the data, while <span class="tag">permissions</span> determine which users can read, create, update, or delete data.
            </p>
            <my-shiki lang="json" code='{
    "collections": {
        "users": {
            "schema": {},
            "permissions": {}
        },
        "todos": {
            "schema": {},
            "permissions": {}
        }
    }
}' />
        </section>
    </span>
</template>

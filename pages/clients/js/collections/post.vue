<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Post()</h1>
            <h2>post({ ...params })</h2>
            <p>
                The <span class="tag">post</span> method allows you to create a new document within the specified
                collection. The request body should contain the data for the new document, adhering to the schema
                defined in the <span class="tag">config.json</span> file. If <span class="tag">pick</span> or <span
                    class="tag">omit</span> rules are defined, only the specified fields will be included or excluded in
                the request.
            </p>
            <p>
                You can customize the result fields using the <span class="tag">project</span> property in <span
                    class="tag">config.json</span>.
            </p>
            <my-shiki code='const todo = await client.collection("todos").post({
    "title": "New Task",
    "priority": "high"
});
console.log(todo);

// result:
// {
//   "_id": "60d3b41d3d8b6e5b1f0f3b8c",
//   "title": "New Task",
//   "priority": "high"
//   "__v": 0
// }
' />

        </section>

        <section>
            <h3>Add Current user to new Document</h3>
            <p>To include the current user as a user property in a new document, define the user property in the
                <span class="tag">config.json</span> schema as follows:
            </p>

            <my-shiki lang="json" code='"posts": {
    "schema": {
        "title": {
            "type": "string"
        },
        "user": {
            "type": "string",
            "default": "$.auth._id"
        }
    },
    "permissions": {
        "user": {
            "post": {
                "pick": [
                    "title",
                    "priority"
                ]
            }
        }
    }
}' />

            <p>In this example, only authenticated <span class="tag important">users</span> can create a todo, and the
                <span class="tag">user</span> field is automatically set to the authenticated user's <span
                    class="tag">_id</span> from the JWT.</p>

            <my-shiki code='import Client from "noonjs";
const token = { access: "eyJ0eXBiOiJ3V1QiaCJhbGciOiJIUzI1..." }; // JWT token
const client = new Client("http://localhost:3000", { token }";
const todo = await client.collection("todos").post({
    "title": "New Task",
    "priority": "high"
});
console.log(todo);

// result:
// {
//   "_id": "60d3b41d3d8b6e5b1f0f3b8c",
//   "user": "640b8e8e4a9e5f56c678b8d9",
//   "title": "New Task",
//   "priority": "high"
//   "__v": 0
// }
' />
        </section>


    </span>
</template>

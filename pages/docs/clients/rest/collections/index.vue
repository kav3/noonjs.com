<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Collections</h1>
            <p>In noonjs, collections represent your structured data, and the REST API provides full CRUD operations to
                interact with them. The API is stateless, ensuring each request is independent and doesn't rely on any
                prior interactions. All limitations and access controls are configured in the <span
                    class="tag">config.json</span> file. Each collection config allows you to set detailed permissions,
                ensuring that only authorized users can access
                or modify data, following the principle of least privilege.
            </p>
            <my-shiki lang="json" code='GET /todos
            
// result: 
[
  {
    "_id": "60b8d6a9b13b8c47a7a2a7bc",
    "title": "Do laundry",
    "done": 1627848000
  },
  {
    "_id": "60b8d6a9b13b8c47a7a2a7bd",
    "title": "Write code",
    "done": 1627934400
  },
  {
    "_id": "60b8d6a9b13b8c47a7a2a7be",
    "title": "Buy groceries"
  },
  {
    "_id": "60b8d6a9b13b8c47a7a2a7bf",
    "title": "Clean the house"
  },
  {
    "_id": "60b8d6a9b13b8c47a7a2a7c0",
    "title": "Attend meeting",
    "done": 1628020800
  },
  {
    "_id": "60b8d6a9b13b8c47a7a2a7c1",
    "title": "Finish project report"
  }
]

' />
            <p><span class="tag">Get</span> – Fetch multiple records from a collection with filtering, sorting, and
                pagination support.</p>
            <p><span class="tag">Post</span> – Create a new record in the collection with automatic validation and
                permission checks.</p>
            <p><span class="tag">Patch</span> – Update an existing record with partial data, ensuring only allowed
                fields are modified.</p>
            <p><span class="tag">Delete</span> – Remove a record from the collection, following configured deletion
                rules.</p>
            <p><span class="tag">Count</span> – Retrieve the total number of records in a collection based on filters.
            </p>
            <p>All these operations are fully configurable in <span class="tag">config.json</span>, allowing you to
                define access permissions and data constraints effortlessly.</p>
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>The collection name <span class="tag important">auth</span> is reserved for the authentication endpoint. If you still wish to use 'auth'
                as a collection name, you can modify the source code accordingly.</p>
        </section>

    </span>
</template>
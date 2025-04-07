<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Get</h1>
            <p>
                This endpoint allows you to retrieve a list of documents from the collection. It supports multiple query
                parameters for filtering, sorting, pagination, and projection, allowing for highly customizable results.
            </p>
            <my-shiki lang="json" code='GET /users' />
            <span class="hint">For example, this endpoint fetches the entire list of users</span>
        </section>
        <section class="important">
            <h4>Important</h4>
            <p>Considering the appropriate permissions for accessing the collection.</p>
            <p>For example, these permissions grant everyone access to all data, which is risky and should never be used
                in production, especially with the <span class="tag important">users</span> collection!</p>
            <my-shiki lang="json" code='{
    "permissions": {
        "*": true
    }
}' />

        </section>

        <section>
            <h2>Filter</h2>
            <p>
                You can filter the results using the `q` query parameter, where `q[name]` allows you to filter users
                based on the name. For example, to get users with the name "mike", you would use:
            </p>
            <my-shiki lang="json" code='GET /users?q[name]="mike"' />


            <p>
                if you want to filter users with the name "mike" or "john":
            </p>
            <my-shiki lang="json" code='GET /users?q[name]="mike"&q[name]="john"' />


            <p>
                if you want to filter users with regex, you can use the `$regex` operator. For example, to get users
                with names that contains "m", you would use:
            </p>
            <my-shiki lang="json" code='GET /users?q[name][$regex]=m' />

            <span class="hint">
                consider case sensitivity when using regex. By default, regex queries are case-sensitive. To perform a
                case-insensitive search, you can use <span class="tag important">&q[name][$options]=i</span>
            </span>

            <p>
                The <span class="tag">q</span> parameter can be used to filter based on any field in the collection.
                You can use operators like
                <span class="tag">$eq</span>, <span class="tag">$ne</span>, <span class="tag">$gt</span>, <span
                    class="tag">$lt</span>, <span class="tag">$gte</span>, and <span class="tag">$lte</span> for
                more complex queries.
            </p>
            <my-shiki lang="json" code='GET /users?q[balance][$gt]=200
            
// result
[
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Alice",
      "balance": 250
    },
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Bob",
      "balance": 300
    },
    {
      "_id": "507f1f77bcf86cd799439013",
      "name": "Charlie",
      "balance": 500
    },
    {
      "_id": "507f1f77bcf86cd799439014",
      "name": "Mike",
      "balance": 350
    },
    {
      "_id": "507f1f77bcf86cd799439015",
      "name": "John",
      "balance": 400
    }
  ]
' />

        </section>

        <section>
            <h2>Sort</h2>
            <p>
                The results can be sorted using the `sort` query parameter. For example, to sort the users by their
                `createdAt` field in descending order, you can use:
            </p>
            <my-shiki lang="json" code='GET /users?sort={createdAt:-1}' />
        </section>

        <section>
            <h2>Pagination</h2>
            <p>
                Pagination can be controlled using `skip` and `limit` query parameters. For example, to skip the first
                10 users and limit the results to 5 users, you can use:
            </p>
            <my-shiki lang="json" code='GET /users?skip=10&limit=5' />
        </section>

        <section>
            <h2>Projection</h2>
            <p>
                You can specify which fields to include in the results by using the `project` query parameter. For
                example, to only return the `name` field for each user, you can use:
            </p>
            <my-shiki lang="json" code='GET /users?project=["name"]' />
        </section>

        <section class="info">
            <h4>Info</h4>
            <p>Considering you can use all of these parameters together.</p>
        </section>
    </span>
</template>

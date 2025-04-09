<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Get</h1>
            <p>
                The <span class="tag">Get</span> permissions control how a user can retrieve data from a specific
                collection. For instance,
                in the case of the "todos" collection, these permissions are designed to ensure that users can only
                access their own data. Here's how different properties in the "get" permissions work:
            </p>
            <my-shiki lang="json" code='{
	"collections": {
		"todos": {
			"schema": {...},
			"permissions": {
				"user": {
                    "get": {
                        "pick": ["title"],
                        "omit": ["user"],
                        "q": {
                            "user": "$.auth._id"
                        },
                        "project": [
                            "title"
                        ],
                        "pagination": {
                            "limit": 15,
                            "max": 15,
                            "sort": {
                                "_id": 1
                            }
                        }
				    }
                }
			}
		}
	}
}' />
            <p>
                <span class="tag">pick</span> This property specifies the fields to be included in the query result
            </p>
            <p>
                <span class="tag">omit</span> The "omit" property removes specific fields from the query result.
            </p>
            <p>
                <span class="tag">q</span> This property attaches a query filter to the request. In this example, it
                ensures that the user can only retrieve their own todos by filtering based on the user's ID, which is
                taken from the authentication context (`$.auth._id`).
            </p>
            <p>
                <span class="tag">project</span> The "project" property allows the user to specify which fields to
                include in the query results. In this case, only the "title" field of the todos will be included in the
                results.
            </p>
            <p>
                <span class="tag">pagination</span> This property defines how the query results are paginated. The
                default <span class="tag">limit</span> is set to 15, meaning only 15 results will be returned at a time.
                Users can set a custom "limit"
                in the query string, but the maximum limit is 15 to prevent excessive data load. If no limit is set, all
                documents would be fetched, which can be slow and inefficient. The "sort" property ensures that the
                results are sorted by the "_id" field in ascending order.
            </p>
        </section>
    </span>
</template>

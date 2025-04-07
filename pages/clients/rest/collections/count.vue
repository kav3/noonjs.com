<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Count</h1>
            <p>
                This endpoint allows you to retrieve the total number of documents in a collection. It supports query
                parameters for filtering, enabling you to count documents based on specific criteria.
            </p>
            <my-shiki lang="json" code='GET /users/count' />
            <span class="hint">For example, this endpoint returns the total number of users in the collection.</span>
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>Ensure appropriate permissions when accessing this endpoint.</p>
            <p>
                Granting unrestricted access to the <span class="tag important">count</span> endpoint may expose
                sensitive insights into the data. Always configure permissions accordingly.
            </p>
        </section>

        <section>
            <h2>Filter</h2>
            <p>
                The `q` query parameter allows you to filter documents before counting them. For example, to count users
                with the name "mike":
            </p>
            <my-shiki lang="json" code='GET /users/count?q[name]="mike"' />

            <p>
                To count users with the name "mike" or "john":
            </p>
            <my-shiki lang="json" code='GET /users/count?q[name]="mike"&q[name]="john"' />

            <p>
                To count users whose names contain "m", use the `$regex` operator:
            </p>
            <my-shiki lang="json" code='GET /users/count?q[name][$regex]=m' />

            <span class="hint">
                Regex queries are case-sensitive by default. To perform a case-insensitive search, add
                <span class="tag important">&q[name][$options]=i</span>
            </span>
        </section>

        <section class="info">
            <h4>Info</h4>
            <p>You can combine multiple query parameters to refine the count results.</p>
        </section>
    </span>
</template>

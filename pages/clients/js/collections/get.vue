<script setup lang="ts">
useHead({
    title: 'JS Client - Get()'
})
</script>
<template>
    <span class="flex flex-col gap-2">
        <h1>Get()</h1>
        <h2>get({ q?: {}, skip?: number, limit?: number, project?: [], sort?: {} })</h2>
        <p>
            The noonjs client provides methods for retrieving records from the backend, supporting parameters such
            as <span class="tag">q</span>, <span class="tag">limit</span>, <span class="tag">skip</span>, <span
                class="tag">project</span>, and <span class="tag">sort</span>.
        </p>

        <section id="retrieve-all">
            <h3>Retrieve All Documents</h3>
            <span>Fetches all documents from the "todos" collection.</span>
            <my-shiki code='const todos = await client.collection("todos").get();' />
        </section>

        <section id="paginated">
            <h3>Paginated Retrieval</h3>
            <span>Fetches a subset of documents, skipping the first 10 and limiting the result to 20.</span>
            <my-shiki code='const todos = await client.collection("todos").get({ skip: 10, limit: 20 });' />
        </section>

        <section id="query-with-condition">
            <h3>Query with Condition</h3>
            <span>Retrieves documents where the "done" field exists.</span>
            <my-shiki code='const todos = await client.collection("todos").get({ q: { done: { $exists: true } } });' />
        </section>

        <section id="specific-properties">
            <h3>Retrieve Specific Properties</h3>
            <span>Fetches only specific fields (e.g., "title") from the "todos" collection.</span>
            <my-shiki code='const todos = await client.collection("todos").get({ project: "title" });' />
        </section>

        <section id="sorted">
            <h3>Sorted Retrieval</h3>
            <span>Fetches documents sorted by the "done" field in descending order.</span>
            <my-shiki code='const todos = await client.collection("todos").get({ sort: { done: -1 } });' />
        </section>

    </span>

</template>
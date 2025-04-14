<script setup lang="ts">
useHead({
    title: 'JS Client - Count()'
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <h1>Count()</h1>
        <h2>count({ q?: {} })</h2>
        <p>
            The <span class="tag">count()</span> method in noonjs retrieves the total number of documents in a
            collection that match the given filter. This method is useful when you need to determine the size of a
            dataset without retrieving all documents, making it efficient for analytics, pagination, or conditional
            operations.
        </p>

        <section id="count">
            <span>It retrieves the total number of documents in a collection.</span>
            <my-shiki code='const total = await client.collection("todos").count();

// result
// 2' />
        </section>

        <section id="query-with-condition">
            <h3>Query with Condition</h3>
            <span>It retrieves the total number of done todos in a collection.</span>
            <my-shiki code='const todos = await client.collection("todos").count({ q: { done: { $exists: true } } });
            
// result
// 1' />
        </section>

    </span>

</template>
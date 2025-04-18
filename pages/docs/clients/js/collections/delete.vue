<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Delete()</h1>
            <h2>delete(q?: {})</h2>
            <p>
                The <span class="tag">delete</span> method allows removing a document from a collection by its unique
                identifier <span class="tag">_id</span>.
                The deletion is <span class="tag important">permanent</span> and the document will no longer exist in
                the collection. If <span class="tag">q</span> is defined in <span class="tag">config.json</span>,
                the backend may enforce additional conditions, such as ensuring a user can only delete their own
                records.
            </p>
            <my-shiki code='const result = await client.collection("todos").delete({ _id: "661d42f7b39a4b0012a67f12" })' />
        </section>
    </span>
</template>

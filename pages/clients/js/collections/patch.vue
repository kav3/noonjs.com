<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Patch()</h1>
            <h2>patch(_id, { ...params })</h2>
            <p>
                The <span class="tag">patch</span> method allows updating specific fields of a document in a collection.
                It modifies only the provided fields while keeping the rest unchanged. If <span class="tag">pick</span>
                or <span class="tag">omit</span> is defined in <span class="tag">config.json</span>, the backend will enforce these rules to allow or
                restrict certain fields.
                The backend also applies custom conditions using <span class="tag">q</span>, for example, ensuring users
                can only update their own todos.
                The method returns the updated object based on the project configuration.
            </p>
            <my-shiki code='const todo = await client.collection("todos").patch("661d42f7b39a4b0012a67f12", {
  "title": "Updated Task"
})' />
        </section>
    </span>
</template>

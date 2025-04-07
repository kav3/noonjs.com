<template>
    <span class="flex flex-col gap-2">

        <h1>Collections</h1>
        <p>
            All CRUD actions are performed through the <span class="tag important">collection</span> method with the
            collection name specified as the parameter.
        </p>

        <section>
            <my-shiki code='const todo = await client.collection("todos").post({ title: "Buy milk" });
console.log(todo);

// result:
// {
//   "_id": "60d3b41d3d8b6e5b1f0f3b8c",
//   "title": "Buy milk",
//   "__v": 0
// }
' />
            <p>
                We support five methods for each collection:
                <nuxt-link to="/clients/js/collections/get">Get</nuxt-link>,
                <nuxt-link to="/clients/js/collections/post">Post</nuxt-link>,
                <nuxt-link to="/clients/js/collections/patch">Patch</nuxt-link>,
                <nuxt-link to="/clients/js/collections/delete">Delete</nuxt-link> and
                <nuxt-link to="/clients/js/collections/count">Count</nuxt-link>.
            </p>

        </section>

    </span>
</template>
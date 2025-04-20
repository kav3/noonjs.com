<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Collection Events</h1>
            <p>In the <span class="tag">noonjs</span>, whenever a collection undergoes a change (create, update, or delete), an event is triggered, notifying all clients specified in <nuxt-link to="/docs/config/collections">config.json</nuxt-link>.</p>
        </section>

        <section class="info">
            <h4>IO</h4>
            <p>If <span class="tag info">io</span> is <span class="tag info">true</span>, it indicates that the event
                originated
                from the server,
                meaning the document might contain fields filtered based on user permissions.</p>
        </section>

        <section>
            <h2>Created</h2>
            <p>
                The <span class="tag">created</span> event is triggered when a new document is added to the collection.
            </p>
            <my-shiki code='client.collection("todos").on("created", ({ todo, io }) => {
// do something with todo
})' />
        </section>

        <section>
            <h2>Updated</h2>
            <p>
                The <span class="tag">updated</span> event is triggered when an existing document in the collection is
                modified.
                The received <span class="tag">todo</span> object contains the updated data.
            </p>
            <my-shiki code='client.collection("todos").on("updated", ({ todo, io }) => {
// do something with todo
})' />
        </section>

        <section>
            <h2>Deleted</h2>
            <p>
                The <span class="tag">deleted</span> event is triggered when a document is removed from the collection.
                The <span class="tag">todo</span> object contains the removed document's details.
            </p>
            <my-shiki code='client.collection("todos").on("deleted", ({ todo, io }) => {
})' />
        </section>
    </span>
</template>

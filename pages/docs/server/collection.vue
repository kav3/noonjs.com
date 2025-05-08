<script setup lang="ts">
const title = "Collection"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <p>
                Direct access to the Mongoose model. Use with caution, <span class="tag important">this bypasses noonjs's built-in restrictions and
                    validations.</span>
            </p>

            <my-shiki lang="js" code='...
   
noonjs.collection("users").findOne({ phone })

...' />
        </section>

    </span>
</template>

<script setup lang="ts">
const title = "Auth Collection"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section id="count">
            <h1>{{ title }}</h1>
            <span>
                If your app requires permission-based access control, you should define a <span
                    class="tag">permissions</span> field directly in the <span class="tag">auth</span> collection.
                Unlike fields like <span class="tag">username</span> or <span class="tag">password</span>, which can
                have customizable names, the <span class="tag important">permissions</span> field should always be named
                exactly
                that to ensure consistency across the system. This allows the framework or service to properly handle
                permission checks without needing custom configuration.
            </span>
            <my-shiki lang="json" code='{
...
"users": {
    "schema": {
        ...
        "permissions": {
            "type": "array",
            "default": ["user"]
        }
        ...
    }
}
...
}' />
            <p>
                The <span class="tag">permissions</span> field in the <span class="tag">auth</span> collection must be
                an array. While setting a default value is optional, it's recommended to assign at least one permission
                (e.g., <span class="tag">user</span>) automatically when a user registers.
                For general-purpose roles, you can use values like <span class="tag">user</span>, <span
                    class="tag">customer</span>, or <span class="tag">admin</span>. For more specific use cases,
                permissions like <span class="tag">only-view</span> or <span class="tag">post-editor</span> can be used.
                All of these permission values can be referenced in the permission definitions of any collection, making
                it easy to control access with fine-tuned flexibility.
            </p>
        </section>

    </span>
</template>

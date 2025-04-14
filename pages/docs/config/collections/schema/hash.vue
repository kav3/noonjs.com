<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Hash</h1>
            <p>The <span class="tag">hash</span> type is a string used to store securely hashed values, such as passwords. NoonJS uses bcrypt for hashing.</p>
            <my-shiki lang="json" code='{
    "schema": {
        "username": {
            "type": "string"
        },
        "password": {
            "type": "hash"
        }
    }
}' />
        </section>
    </span>
</template>

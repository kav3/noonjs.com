<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Logout</h1>
            <p>
                For browser clients, after a <span class="tag">GET</span> request to <span
                    class="tag">/auth/logout</span>, the authentication cookie is deleted.
                For other types of clients, you can simply remove the access and refresh tokens on the client side.
            </p>
            <my-shiki lang="json" code='GET /auth/logout' />
        </section>
    </span>
</template>
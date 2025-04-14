<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Logout()</h1>
            <h2>logout(signal?: AbortSignal)</h2>
            <p>
               This function sends a REST request to the <span class="tag">/auth/logout</span> endpoint to log out the user. It removes the user's authentication cookie from the browser. This method also removes the internal token and triggers a <span class="tag">auth().on("logout")</span> event. Make sure to handle it appropriately with your token storage system.
            </p>
            <my-shiki code='await client.auth().logout();' />
        </section>
    </span>
</template>

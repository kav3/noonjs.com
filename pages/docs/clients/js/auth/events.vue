<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Auth Events</h1>
            <p>All of these events are triggered from the local client.</p>
        </section>
        <section>
            <h2>Login</h2>
            <p>
                Triggered when a user successfully logs in. The callback receives the authentication token.
            </p>
            <my-shiki code='client.auth().on("login", token => { /* Store token for future use. */ });' />
        </section>

        <section>
            <h2>Register</h2>
            <p>
                Triggered when a new user registers successfully. The callback receives the user details.
            </p>
            <my-shiki code='client.auth().on("register", token => { /* Store token for future use. */ });' />
        </section>

        <section>
            <h2>Logout</h2>
            <p>
                Triggered when the user logs out. No parameters are passed.
            </p>
            <my-shiki
                code='client.auth().on("logout", () => { /* Redirect to another page (e.g., the home page) */ });' />
        </section>
    </span>
</template>

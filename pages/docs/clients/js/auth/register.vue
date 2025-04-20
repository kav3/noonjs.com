<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Register()</h1>
            <h2>register(dto: any, signal?: AbortSignal)</h2>
            <p>
                Registers a new user by creating an account with the provided credentials. Required fields should be configured in <nuxt-link to="/docs/config/auth">config.json</nuxt-link>.
            </p>
            <my-shiki
                code='await client.auth().register({ username: "mike", password: "mikes-wife-birthday", email: "mike@example.com" })' />
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>The password will be hashed if you configure it as described in the <nuxt-link to="/clients/rest/auth/register/#hash">REST documentation</nuxt-link>.</p>
        </section>

        <section>
            <h2>Result</h2>
            <p>The <span class="tag">register()</span> method returns a token object containing both an access token and
                a
                refresh token. If the request is made from a browser environment, only the access token is included in
                the response, while the refresh token is stored in an HTTP-only cookie.</p>

            <my-shiki code='const token = await client.auth().register({ username: "mike", password: "mikes-wife-birthday", email: "mike@example.com" })
//console.log(token)

// result:
// {
//      access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
// }
' />
        </section>

        <section class="info">
            <h4>Suggestion</h4>
            <p>If you need to save the token for future use, retrieve it from the <span
                    class="tag">client.auth().on("register", token => { /* save token */ })</span> event instead of
                this result.</p>
        </section>
    </span>
</template>

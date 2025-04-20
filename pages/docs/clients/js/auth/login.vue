<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Login()</h1>
            <h2>login(dto: any, signal?: AbortSignal)</h2>
            <p>
                Logs in a user by verifying their credentials. If successful, it returns an authentication token
                that can be used for further requests.
            </p>
            <my-shiki code='await client.auth().login({ username: "mike", password: "mikes-wife-birthday" })' />
        </section>

        <section>
            <h2>Result</h2>
            <p>The <span class="tag">login()</span> method returns a token object containing both an access token and a
                refresh token. However, if the request is made from a browser environment, only the access token is
                included in the response, while the refresh token is stored in an HTTP-only cookie.</p>

            <my-shiki code='const token = await client.auth().login({ username: "mike", password: "mikes-wife-birthday" })
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
                    class="tag">client.auth().on("login", token => { /* save token */ })</span> event instead of
                this result.</p>
        </section>

    </span>
</template>

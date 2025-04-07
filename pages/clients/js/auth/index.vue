<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Auth()</h1>
            <p>
                The <span class='tag'>register()</span> method is used to register a new user in the system. It
                typically requires user credentials such as email, password, and other required details, as defined in
                the <span class="tag">config.json</span> file, including props like <span class="tag">username</span>,
                <span class="tag">password</span>, and any additional custom fields specified.
                Upon successful registration, the system will trigger the "register" event, and the user will receive a
                token.
            </p>

            <p>
                The <span class="tag">login()</span> method is used when a registered user wants to authenticate
                themselves. It requires the user to provide their credentials (e.g., email and password).
                Upon successful login, the system will trigger the "login" event, and the user will receive an
                authentication token for future requests.
            </p>

            <p>
                The <span class="tag">logout()</span> method is used to log the user out of the system. It clears any
                active authentication tokens and triggers the "logout" event.
                After a successful logout, the user will no longer be authenticated, and any further requests requiring
                authentication will be denied unless the user logs in again.
            </p>

            <p>
                This event handler listens for authentication-related actions, including <span
                    class="tag">register</span>, <span class="tag">login</span>, and <span class="tag">logout</span>.
            </p>
            <my-shiki
                code='client.auth().on(["register", "login", "logout"], token => { /* Store the token in localStorage for future use, such as when the client refreshes the page. */ })' />
            <span class="hint">You can handle them separately</span>
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>The best approach is to store the access token in <span class="tag important">memory</span> and the
                refresh token in an <span class="tag important">HTTP-only cookie</span>. If the request is sent from the
                browser, noonjs automatically stores the refresh token in the HTTP-only cookie.</p>
        </section>

        <section>
            <h2>Token</h2>
            <p>The "noonjs" token generally contains both access and refresh tokens. However, if the request is sent
                from a browser environment, the token object only includes the access token, while the refresh token is
                stored in an HTTP-only cookie. The access token contains the <span class="tag">_id</span> and <span
                    class="tag">permissions</span>, while the refresh token only contains the <span
                    class="tag">_id</span>.</p>

            <my-shiki lang="json" code='{
    access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
' />
        </section>

        <section class="info">
            <p>The noonjs client manages the token for its own needs, storing it in memory for subsequent REST calls and
                socket communication. When the client is created, it depends on the environment and requires an initial
                token if the user is returning.</p>
        </section>

        <section>
            <h2>Refresh Token</h2>
            <p>The noonjs client automatically handles refresh token management when the access token expires. It
                retrieves a new token by calling the <span class="tag">/auth/refresh</span> endpoint with the
                credentials, so <span class="tag important">no further action is needed</span>.</p>
        </section>
    </span>
</template>

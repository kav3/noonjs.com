<script setup lang="ts">
const title = "Auth"
useHead({
    title
})
</script>

<template>
    <span class="flex flex-col gap-2">
        <section id="count">
            <h1>{{ title }}</h1>
            <span>
                This auth configuration in noonjs defines authentication settings for your application. The <span
                    class="tag">collection</span> is set to <span class="tag">"users"</span>, meaning user credentials
                are stored in the <span class="tag">users</span> collection of your database. The <span
                    class="tag">secret</span> is <span class="tag">"your-primary-secret"</span>, used to sign JWT access
                tokens, while <span class="tag">refreshsecret</span> is <span
                    class="tag">"your-secondary-secret"</span>, used for signing refresh tokens. If <span
                    class="tag">refreshsecret</span> is not provided, the application will use <span
                    class="tag">secret</span> for both access and refresh tokens, which is not recommended for security
                reasons. The <span class="tag">username</span> field is <span class="tag">"username"</span>, which
                represents the user's login identifier, and <span class="tag">password</span> is <span
                    class="tag">"password"</span>, referring to the field storing hashed passwords. The <span
                    class="tag">access</span> token expires in <span class="tag">900</span> seconds (15 minutes), and
                the <span class="tag">refresh</span> token expires in <span class="tag">31,536,000</span> seconds (1
                year), allowing users to obtain new access tokens without re-authenticating.
            </span>
            <my-shiki lang="json" code='{
"auth": {
        "collection": "users",
        "secret": "your-primary-secret", 
        "refreshsecret": "your-secondary-secret", 
        "username": "username", 
        "password": "password",
        "access": 900,
        "refresh": 31536000
        }
}' />
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>
                If your frontend and backend are on different domains, subdomains, or ports, and you want to use
                <span class="tag important">authentication</span>, make sure to define the <span
                    class="tag important">CORS</span> origin and enable credentials in the <span
                    class="tag important">config.json</span> or
                <span class="tag important">environment variables</span>. Want to learn more? Check out the <nuxt-link to="/docs/config/cors">CORS</nuxt-link> docs.
            </p>
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>The auth <nuxt-link to="/docs/config/auth/collection">collection</nuxt-link> must include a <span
                    class="tag important">permissions</span> field, which should be an array with a default value.</p>
        </section>

        <section id="query-with-condition">
            <h3>Environment variables</h3>
            <p>For authentication, you can specify the environment variables for the primary secret, refresh secret,
                access token expiration, and refresh token expiration. If they are <span class="tag important">not
                    already included</span> in the
                configuration file, you can pass them directly in the environment like this:</p>

            <p><span class="tag">AUTH_SECRET</span> sets the primary secret key for authentication.</p>
            <p><span class="tag">AUTH_REFRESH_SECRET</span> sets the secret key used for refreshing
                tokens.</p>
            <p><span class="tag">AUTH_ACCESS</span> sets the expiration time for the access token in seconds</p>
            <p><span class="tag">AUTH_REFRESH</span> sets the expiration time for the refresh token in seconds</p>

            <p>These values are essential for managing token authentication and ensuring secure communication between
                the client and server.</p>

            <my-shiki lang="txt" code='SECRET=your-primary-secret 
REFRESH_SECRET=your-secondary-secret
ACCESS=900
REFRESH=31536000' />
        </section>

        <section class="important">
            <h4>Important</h4>
            <p>Use long string for secret(access token), ideally <span class="tag important">at least 32
                    characters</span>, to enhance security.</p>
            <p>For refresh tokens, a length of at least 64 characters (preferably 128+ characters) is recommended. This
                ensures strong entropy and makes it significantly harder to guess or brute-force.</p>
        </section>
    </span>
</template>

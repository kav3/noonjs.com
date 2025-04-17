<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Auth</h1>
            <p>
                In noonjs, authentication is based on <span class="tag">JWT</span> and includes <span
                    class="tag">login</span>, <span class="tag">register</span>, <span class="tag">logout</span>, and
                <span class="tag">refresh</span> methods. When a
                user logs in or registers, they receive an access token and a refresh token. If the request comes from a
                browser, <span class="tag important">the refresh token is stored in an HTTP-only cookie</span>;
                otherwise,
                both tokens are returned in JSON.
            </p>
            <my-shiki lang="json" code='{
  "access": "eyJhbGciOiJIUzI1NiI...",
  "refresh": "eyJhbGciOiJIUzI1Ni..."
}' />
            <p class="hint">
                This is for demo purposes only and should be adjusted based on your application's security requirements.
            </p>
        </section>

        <section class="info">
            <h4>Info</h4>
            <p>You can modify the <nuxt-link to="/docs/config/auth">auth configuration</nuxt-link> in the <span class="tag">config.json</span> file
            </p>
        </section>

    </span>

</template>
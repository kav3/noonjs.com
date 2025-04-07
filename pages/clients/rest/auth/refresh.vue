<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Refresh</h1>
            <p>
                The <span class="tag">auth/refresh</span> endpoint in noonjs is used to renew the access token. When a
                POST request is sent to this endpoint, if the request comes from a browser, the refresh token is
                extracted from the cookie. If
                the refresh token is valid, a new access token is generated and returned in the response as
            </p>
            <my-shiki lang="json" code='{ "access": "eyJhbGciOiJIUzI1NiI..." }' />
        </section>

        <section>
            <h2>non-browser</h2>
            <p>In this case, the refresh token is included in the request body. If the provided refresh token is valid, a new access token is generated and returned in the response.</p>
            <my-shiki lang="json" code='POST /auth/refresh 
{
    "refresh": "eyJhbGciOiJIUzI1NiI..."
}

// result
{
  "access": "eyJhbGciOiJIUzI1NiI..."
}' />
        </section>
    </span>
</template>
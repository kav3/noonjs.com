<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Login</h1>
            <p>The noonjs authentication system provides a customizable login API that supports flexible field names such as
                <span class="tag">username</span> and <span class="tag">password</span>. These can be configured in the <span class="tag">config.json</span> file.
                The login endpoint authenticates users by verifying credentials and issuing access tokens.</p>
            <my-shiki lang="json" code='POST /auth/login 

{
  "email": "user@example.com",
  "password": "securePassword123"
}' />
        </section>

        <section>
            <h3>Authentication Process</h3>
            <p>When a user logs in, noonjs verifies the provided credentials against the stored hashed password. If authentication
                is successful, a JWT access token is generated, allowing secure API interactions.</p>
            <my-shiki lang="json" code='{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}' />
            <span class="hint">The generated access token should be included in the authorization header for subsequent requests.</span>
        </section>

        <section>
            <h3>Customizable Fields</h3>
            <p>
                Like the registration process, login field names such as <span class="tag">username</span> and <span class="tag">password</span>
                can be adapted based on the <span class="tag">config.json</span> settings.
                For example, if the configuration specifies <span class="tag">username</span> as <span class="tag">"mobile"</span>
                and <span class="tag">password</span> as <span class="tag">"pin"</span>,
                the login request would look like this:
            </p>
            <my-shiki lang="json" code='POST /auth/login 

{
  "mobile": "+1234567890",
  "pin": "securePin123"
}' />
            <span class="hint">This flexibility allows developers to match authentication fields to their application’s specific needs.</span>
        </section>

        <section class="info">
            <h4>Info</h4>
            The authentication logic can be further customized in the backend. The client simply sends the user object,
            requiring no additional changes for field mapping.
        </section>
    </span>
</template>

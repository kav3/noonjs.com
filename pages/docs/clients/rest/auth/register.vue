<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Register</h1>
            <p>The noonjs authentication system provides a flexible user registration API where field names such as
                <span class="tag">username</span> and <span class="tag">password</span> can be customized in the
                configuration file. The registration endpoint allows clients to create new user accounts by sending
                credentials, and noonjs automatically handles validation, password hashing, and user storage.
            </p>
            <my-shiki lang="json" code='POST /auth/register 

{
  "email": "user@example.com",
  "password": "securePassword123"
}' />
        </section>

        <section id="hash">

            <h3>Password Hashing</h3>
            <p>In noonjs, password hashing is automatically handled when the corresponding field's type is set to <span
                    class="tag">"hash"</span> in
                the configuration file. This ensures that sensitive credentials are securely stored without requiring
                manual
                hashing logic.

                For example, in the <span class="tag">config.json</span> file, defining the user schema like this:</p>
            <my-shiki lang="json" code='{
  "users": {
    "schema": {
      "email": { "type": "string", "unique": true },
      "password": { "type": "hash" }
    }
  }
}' />
            <span class="hint">By setting <span class="tag">"type": "hash"</span>, noonjs automatically ensures password
                security without requiring additional encryption logic, making authentication both secure and
                convenient.</span>
        </section>

        <section>
            <h3>Customizable Fields</h3>
            <p>
                The noonjs authentication system provides a flexible user registration API where field names such as
                <span class="tag">username</span> and <span class="tag">password</span> can be customized in the
                configuration file. The registration endpoint allows
                clients to create new user accounts by sending credentials, and noonjs automatically handles validation,
                password hashing, and user storage.

                For instance, if the configuration specifies <span class="tag">username</span> as <span
                    class="tag">"mobile"</span> and <span class="tag">password</span> as <span class="tag">"pin"</span>,
                a <span class="tag">POST</span> request
                to <span class="tag">/auth/register</span> would look like this:
            </p>
            <my-shiki lang="json" code='POST /auth/register 

{
  "mobile": "+1234567890",
  "pin": "securePin123"
}' />
            <span class="hint">This flexibility allows developers to adapt the authentication process to their specific
                application needs.</span>



        </section>

        <section class="info">
            <h4>Info</h4>
            For further customization, you can modify the backend source code. The client sends the entire object,
            eliminating the need for additional changes.
        </section>

    </span>

</template>
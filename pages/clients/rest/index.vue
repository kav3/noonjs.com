<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Rest</h1>
            <p>
                The REST API is designed to provide dynamic and efficient access to the resources defined in your configuration. Every collection that you define in the <span class="tag">config.json</span> file will have its corresponding endpoint, allowing seamless interaction with your data. For example, the <span class="tag">users</span> collection will be accessible via the <span class="tag">/users</span> endpoint, which supports operations like <span class="tag">GET</span>, <span class="tag">POST</span>, <span class="tag">PATCH</span>, and more. In addition, authentication is managed via the <span class="tag">auth</span> endpoint, where you can register and log in users with <span class="tag">POST</span> requests to <span class="tag">/auth/register</span> and <span class="tag">/auth/login</span> respectively.
            </p>
        </section>

    </span>
</template>

<template>
    <span class="flex gap-2">
        <span class="flex flex-col w-1/5 md:w-1/6 p-1 md:p-4">
            <docs-nav />
            <ul>
                <li><nuxt-link to="/docs/server">Basic</nuxt-link></li>
                <li><nuxt-link to="/docs/server/auth">Auth</nuxt-link></li>
                <li><nuxt-link to="/docs/server/hello-world">Hello World</nuxt-link></li>
                <li><nuxt-link to="/docs/server/collection">Collection()</nuxt-link></li>
                <li><nuxt-link to="/docs/server/events">Events</nuxt-link></li>
                <li><nuxt-link to="/docs/server/use">Use()</nuxt-link></li>
                <li><nuxt-link to="/docs/server/start">Start()</nuxt-link></li>
                <li><nuxt-link to="/docs/server/stop">Stop()</nuxt-link></li>
            </ul>

        </span>

        <span class="flex flex-1 flex-col p-1 md:p-4 gap-2">
            <NuxtPage />
            <edit-this-page />
        </span>
    </span>
</template>
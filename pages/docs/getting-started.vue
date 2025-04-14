<template>
    <span class="flex gap-2">
        <span class="flex flex-col w-1/5 md:w-1/6 p-1 md:p-4">
            <docs-nav />
            <ul>
                <li><nuxt-link to="/docs/getting-started">Introduction</nuxt-link></li>
                <li><nuxt-link to="/docs/getting-started/installation">Installation</nuxt-link></li>
                <li><nuxt-link to="/docs/getting-started/deployment">Deployment</nuxt-link></li>
            </ul>

        </span>

        <span class="flex flex-1 flex-col p-1 md:p-4 gap-2">
            <NuxtPage />
            <edit-this-page />
        </span>
    </span>
</template>
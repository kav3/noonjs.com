<template>
    <span class="flex gap-2">
        <span class="flex flex-col w-1/5 md:w-1/6 p-1 md:p-4">
            <docs-nav />
            <ul>
                <li><nuxt-link to="/docs/config/base-url">Base Url</nuxt-link></li>
                <li><nuxt-link to="/docs/config/mongodb">MongoDb</nuxt-link></li>
                <li><nuxt-link to="/docs/config/port">Port</nuxt-link></li>
                <li><nuxt-link to="/docs/config/limiter">Limiter</nuxt-link></li>
                <li><nuxt-link to="/docs/config/cors">CORS</nuxt-link></li>
                <li>
                    <nuxt-link to="/docs/config/auth">Auth</nuxt-link>
                    <ul>
                        <li><nuxt-link to="/docs/config/auth/collection">Collection</nuxt-link></li>
                    </ul>
                </li>
                <li>
                    <nuxt-link to="/docs/config/collections">Collections</nuxt-link>
                    <ul>
                        <li>
                            <nuxt-link to="/docs/config/collections/schema">Schema</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/docs/config/collections/schema/number">Number</nuxt-link></li>
                                <li><nuxt-link to="/docs/config/collections/schema/hash">Hash</nuxt-link></li>
                                <li><nuxt-link to="/docs/config/collections/schema/default">Default</nuxt-link></li>
                            </ul>
                        </li>
                        <li>
                            <nuxt-link to="/docs/config/collections/permissions">Permissions</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/docs/config/collections/permissions/get">Get</nuxt-link></li>
                                <li><nuxt-link to="/docs/config/collections/permissions/post">Post</nuxt-link></li>
                                <li><nuxt-link to="/docs/config/collections/permissions/patch">Patch</nuxt-link></li>
                                <li><nuxt-link to="/docs/config/collections/permissions/delete">Delete</nuxt-link></li>
                                <li><nuxt-link to="/docs/config/collections/permissions/io">IO</nuxt-link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><nuxt-link to="/docs/config/debug">Debug</nuxt-link></li>
            </ul>

        </span>

        <span class="flex flex-1 flex-col p-1 md:p-4 gap-2">
            <NuxtPage />
            <edit-this-page />
        </span>
    </span>
</template>
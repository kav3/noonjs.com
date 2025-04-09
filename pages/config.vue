<template>
    <span class="flex gap-2">
        <span class="flex flex-col w-1/5 md:w-1/6 p-1 md:p-4">
            <ul>
                <li><nuxt-link to="/config">Config</nuxt-link></li>
                <li><nuxt-link to="/config/base-url">Base Url</nuxt-link></li>
                <li><nuxt-link to="/config/mongodb">MongoDb</nuxt-link></li>
                <li><nuxt-link to="/config/port">Port</nuxt-link></li>
                <li><nuxt-link to="/config/limiter">Limiter</nuxt-link></li>
                <li><nuxt-link to="/config/auth">Auth</nuxt-link></li>
                <li>
                    <nuxt-link to="/config/collections">Collections</nuxt-link>
                    <ul>
                        <li>
                            <nuxt-link to="/config/collections/schema">Schema</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/config/collections/schema/number">Number</nuxt-link></li>
                                <li><nuxt-link to="/config/collections/schema/hash">Hash</nuxt-link></li>
                                <li><nuxt-link to="/config/collections/schema/default">Default</nuxt-link></li>
                            </ul>
                        </li>
                        <li>
                            <nuxt-link to="/config/collections/permissions">Permissions</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/config/collections/permissions/get">Get</nuxt-link></li>
                                <li><nuxt-link to="/config/collections/permissions/post">Post</nuxt-link></li>
                                <li><nuxt-link to="/config/collections/permissions/patch">Patch</nuxt-link></li>
                                <li><nuxt-link to="/config/collections/permissions/delete">Delete</nuxt-link></li>
                                <li><nuxt-link to="/config/collections/permissions/io">IO</nuxt-link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

        </span>

        <span class="flex flex-1 flex-col p-1 md:p-4 gap-2">
            <NuxtPage />
            <edit-this-page />
        </span>
    </span>
</template>
<template>
    <span class="flex gap-2">
        <span class="flex flex-col w-1/5 md:w-1/6 p-1 md:p-4">
            <docs-nav />

            <ul>
                <li>
                    <nuxt-link to="/docs/clients/#js-client">JS</nuxt-link>
                    <ul>
                        <li>
                            <nuxt-link to="/docs/clients/js/collections">Collections</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/docs/clients/js/collections/get">Get()</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/js/collections/post">Post()</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/js/collections/patch">Patch()</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/js/collections/delete">Delete()</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/js/collections/count">Count()</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/js/collections/events">Events</nuxt-link></li>

                            </ul>
                        </li>
                        <li>
                            <nuxt-link to="/docs/clients/js/auth">Auth</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/docs/clients/js/auth/register">Register</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/js/auth/login">Login</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/js/auth/logout">Logout</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/js/auth/events">Events</nuxt-link></li>
                            </ul>
                        </li>
                        <li><nuxt-link to="/docs/clients/js/live">Live</nuxt-link></li>
                    </ul>
                </li>
                <li><nuxt-link to="/docs/clients/rest">REST</nuxt-link>
                    <ul>
                        <li><nuxt-link to="/docs/clients/rest/collections">Collections</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/docs/clients/rest/collections/get">Get</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/rest/collections/post">Post</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/rest/collections/patch">Patch</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/rest/collections/delete">Delete</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/rest/collections/count">Count</nuxt-link></li>
                            </ul>
                        </li>
                        <li><nuxt-link to="/docs/clients/rest/auth">Auth</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/docs/clients/rest/auth/register">Register</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/rest/auth/login">Login</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/rest/auth/logout">Logout</nuxt-link></li>
                                <li><nuxt-link to="/docs/clients/rest/auth/refresh">Refresh</nuxt-link></li>
                            </ul>

                        </li>
                    </ul>
                </li>
                <li><nuxt-link to="/docs/clients/#react-client">React</nuxt-link></li>
                <li><nuxt-link to="/docs/clients/#vue-client">Vue</nuxt-link></li>
                <li><nuxt-link to="/docs/clients/#nuxt-client">Nuxt</nuxt-link></li>
            </ul>


        </span>

        <span class="flex flex-1 flex-col p-1 md:p-4 gap-2">
            <NuxtPage />
            <edit-this-page />
        </span>
    </span>
</template>
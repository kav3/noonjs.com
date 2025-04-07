<template>
    <span class="flex gap-2">
        <span class="flex flex-col w-1/5 md:w-1/6 p-4">
            <ul>
                <li>
                    <nuxt-link to="/clients/#js-client">JS</nuxt-link>
                    <ul>
                        <li>
                            <nuxt-link to="/clients/js/collections">Collections</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/clients/js/collections/get">Get()</nuxt-link></li>
                                <li><nuxt-link to="/clients/js/collections/post">Post()</nuxt-link></li>
                                <li><nuxt-link to="/clients/js/collections/patch">Patch()</nuxt-link></li>
                                <li><nuxt-link to="/clients/js/collections/delete">Delete()</nuxt-link></li>
                                <li><nuxt-link to="/clients/js/collections/count">Count()</nuxt-link></li>

                            </ul>
                        </li>
                        <li>
                            <nuxt-link to="/clients/js/events">Events</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/clients/js/events/created">Created</nuxt-link></li>
                                <li><nuxt-link to="/clients/js/events/patched">Patched</nuxt-link></li>
                                <li><nuxt-link to="/clients/js/events/deleted">Deleted</nuxt-link></li>
                            </ul>
                        </li>
                        <li>
                            <nuxt-link to="/clients/js/auth">Auth</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/clients/js/auth/register">Register</nuxt-link></li>
                                <li><nuxt-link to="/clients/js/auth/login">Login</nuxt-link></li>
                                <li><nuxt-link to="/clients/js/auth/logout">Logout</nuxt-link></li>
                            </ul>
                        </li>
                        <li><nuxt-link to="/clients/js/live">Live</nuxt-link></li>
                    </ul>
                </li>
                <li><nuxt-link to="/clients/rest">REST</nuxt-link>
                    <ul>
                        <li><nuxt-link to="/clients/rest/collections">Collections</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/clients/rest/collections/get">Get</nuxt-link></li>
                                <li><nuxt-link to="/clients/rest/collections/post">Post</nuxt-link></li>
                                <li><nuxt-link to="/clients/rest/collections/patch">Patch</nuxt-link></li>
                                <li><nuxt-link to="/clients/rest/collections/delete">Delete</nuxt-link></li>
                                <li><nuxt-link to="/clients/rest/collections/count">Count</nuxt-link></li>
                            </ul>
                        </li>
                        <li><nuxt-link to="/clients/rest/auth">Auth</nuxt-link>
                            <ul>
                                <li><nuxt-link to="/clients/rest/auth/register">Register</nuxt-link></li>
                                <li><nuxt-link to="/clients/rest/auth/login">Login</nuxt-link></li>
                                <li><nuxt-link to="/clients/rest/auth/logout">Logout</nuxt-link></li>
                                <li><nuxt-link to="/clients/rest/auth/refresh">Refresh</nuxt-link></li>
                            </ul>

                        </li>
                    </ul>
                </li>
                <li><nuxt-link to="/clients/#react-client">React</nuxt-link></li>
                <li><nuxt-link to="/clients/#vue-client">Vue</nuxt-link></li>
                <li><nuxt-link to="/clients/#nuxt-client">Nuxt</nuxt-link></li>
            </ul>


        </span>

        <span class="flex flex-1 flex-col p-4 gap-2">
            <NuxtPage />
            <edit-this-page />

        </span>
    </span>
</template>
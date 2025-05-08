<script setup lang="ts">
const title = "Auth"
useHead({ title }) 
</script>
<template> <span class="flex flex-col gap-2">
        <section>
            <h1>{{ title }}</h1>
            <h2>auth({ get?, login?, register? })</h2>
            <p><span class="tag">noonjs</span> uses a default authentication mechanism based on username and password
                for registration and login. You can easily change the username field to a cellphone number or any other
                identifier. If you need to completely replace the authentication logic, you can use the provided method
                to do so.</p>
            <my-shiki lang="js" code='import Noonjs from "noonjs" 
import config from "../config.json"

const noonjs = new Noonjs(config)
    
noonjs.auth({
    get(req) {

        // return user profile details
    },
    login(req) {

        // find user

        return { access: { _id, permissions } }
        // return { access: { _id, permissions }, refresh: { _id } }
    },
    register(req) {

        // create user

        return { access: { _id, permissions } }
        // return { access: { _id, permissions }, refresh: { _id } }
    }
})

noonjs.start()' />
            <p>
                In <span class="tag">noonjs</span>, the <span class="tag">login</span> and <span
                    class="tag">register</span> methods should either <span class="tag important">throw an error</span>
                or return
                an object containing the access token, which includes necessary details. noonjs
                will generate a signed token for you based on your security key. If you also return a refresh token,
                noonjs will use it to generate additional access tokens and maintain the user's authentication state.
            </p>
        </section>
    </span>
</template>
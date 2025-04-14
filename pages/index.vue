<script setup lang="ts">
const title = 'Making APIs So Easy, Even Your Dog 🐶 Could Do It'
const description = 'Instant CRUD with authentication and real-time MongoDB, all from a single file.'
useHead({
    title
})
useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: 'https://noonjs.com/img.jpeg'
})
const samples = ref(["Minimal", "Auth", "CRUD", "Permissions", "Live"])
const sample = ref(samples.value[0].toLocaleLowerCase())
const { $color } = useNuxtApp()
const { data: files } = useFetch<any>(`/api/v1/how-to-use`, { params: { type: sample }, watch: [sample] })
const file = ref("index.ts")
function ext(name: string) {
    const [_, e] = name.split(".")
    return e
}
const { data: code } = useFetch(`/api/v1/how-to-use`, {
    params: { type: sample, file }, watch: [sample, file, $color]
})
const lang = computed(() => ext(file.value))
</script>
<template>
    <span class="flex flex-col gap-3">
        <span class="flex flex-col md:flex-row gap-10 items-center">
            <span class="flex flex-col">
                <h1>{{ title }}</h1>
                <h2>Instant CRUD with authentication and real-time MongoDB, all from a <nuxt-link to="/config">single
                        file</nuxt-link>.</h2>

                <span class="flex flex-col gap-2 mt-4">
                    <span class="flex">
                        <nuxt-link to="/docs/getting-started/installation" class="btn primary">Get started</nuxt-link>
                    </span>
                    <span class="flex">
                        <command text="npm create noon" />
                    </span>
                </span>

            </span>
            <span class="flex md:w-2/3 flex-col p-4 dark:bg-zinc-900 border dark:border-zinc-600 rounded-lg gap-2">

                <span class="flex gap-2">
                    <button @click="sample = n.toLocaleLowerCase()" v-for="n in samples"
                        :class="[{ 'bg-zinc-200 dark:bg-zinc-950': n.toLocaleLowerCase() === sample }]"
                        class="flex flex-1 justify-center py-0.5 px-2 rounded-md">{{ n
                        }}</button>

                </span>

                <span class="flex flex-col md:flex-row gap-2">
                    <span v-if="files"
                        class="flex border dark:border-zinc-800 rounded-md p-2 flex-col gap-1 items-start">
                        <button @click="file = f.name" v-for="f in JSON.parse(files)"
                            :class="[{ 'gray': f.name === file }]" class="btn">
                            <file-icon :ext="ext(f.name)" />
                            <span>{{ f.name }}</span>
                        </button>
                    </span>

                    <span
                        class="flex flex-1 w-full border dark:border-zinc-800 rounded-md bg-white dark:bg-[#1f1f1f] p-4">
                        <Shiki :lang :code :key="`${lang}-${$color}`"
                            class="flex whitespace-pre-wrap break-words h-64 overflow-auto w-full"
                            :highlightOptions="{ theme: $color === 'dark' ? 'min-dark' : 'min-light', unwrap: true }" />
                    </span>

                </span>

            </span>
        </span>

        <!-- <h3>These Awesome Folks Trust Us</h3>
        <span class="flex gap-2">
            <logo-itrans class="size-12 filter grayscale" />
        </span> -->

        <h2 class="font-bold">Superpowers</h2>

        <span class="flex grid grid-cols-2 md:grid-cols-3 gap-2">
            <span class="flex flex-col">
                <h3>CRUD</h3>
                <span>Automatically generates full Create, Read, Update, and Delete (CRUD) operations for each schema,
                    reducing manual coding efforts.</span>
            </span>
            <span class="flex flex-col">
                <h3>Full Permissions System</h3>
                <span>Includes a permission system for fine-grained control over who can access and modify data,
                    providing robust security out of the box.</span>
            </span>
            <span class="flex flex-col">
                <h3>JWT Authentication with Refresh Tokens</h3>
                <span>Integrates JWT-based authentication with refresh tokens, ensuring secure user sessions and
                    seamless authentication management.</span>
            </span>

            <span class="flex flex-col">
                <h3>Client</h3>
                <span>A ready-to-use API client for JavaScript and TypeScript with built-in authentication, automatic
                    Socket.IO event handling, and instant API access without setup.</span>
            </span>

            <span class="flex flex-col">
                <h3>Data Validation</h3>
                <span>noonjs includes built-in data validation for both incoming and outgoing data, ensuring that all
                    data conforms to the specified schemas and constraints.</span>
            </span>

            <span class="flex flex-col">
                <h3>Default Value</h3>
                <span>noonjs supports auto-managed fields, such as automatically incrementing values or assigning fields
                    related to the current user (e.g., user ID or timestamp), reducing the need for manual
                    configuration.</span>
            </span>

        </span>

        <h2 class="font-bold">Built like a tank</h2>
        <span class="flex grid grid-cols-2 md:grid-cols-3 gap-2">
            <span class="flex flex-col">
                <span class="flex gap-1">
                    <icon-node class="size-7" />
                    <h3>Express</h3>
                </span>
                <span>Built on top of Express, a minimal and flexible Node.js web application framework, ensuring a
                    solid and reliable foundation.</span>
            </span>
            <span class="flex flex-col">
                <span class="flex gap-1">
                    <icon-mongo class="size-7" />
                    <h3>MongoDB</h3>
                </span>
                <span>Leverages Mongoose for elegant MongoDB object modeling, simplifying schema definitions and data
                    validation.</span>
            </span>
            <span class="flex flex-col">
                <span class="flex gap-1">
                    <icon-socket class="size-7" />
                    <h3>Socket.IO</h3>
                </span>
                <span>Incorporates Socket.IO for real-time communication, enabling instant updates and
                    notifications.</span>
            </span>
        </span>
    </span>
</template>
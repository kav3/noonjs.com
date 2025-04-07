<script setup lang="ts">
const { $color } = useNuxtApp()

const sunrise = ref(false)
onMounted(() => {
  sunrise.value = true
})

</script>
<template>
  <span class="flex flex-col transition-colors duration-300">
    <span
      class="flex w-full h-40 bg-gradient-to-b from-sky-800 to-yellow-100 dark:from-zinc-950 dark:to-sky-900 items-end">
      <span class="flex w-full z-10 justify-between bg-white/40 dark:bg-black/40">
        <nav class="flex mx-auto w-11/12 justify-between">

          <nuxt-link to="/" class="flex items-center gap-1">
            <icon-sun class="size-7" />
            <span class="flex text-2xl font-bold -mt-2">noonjs</span>
            <span class="border px-1 border-black dark:border-white rounded-md text-xs font-bold ms-2">v0.1</span>
          </nuxt-link>

          <span class="flex">
            <nuxt-link to="/clients" class="link">Clients</nuxt-link>
            <nuxt-link to="/blog" class="link">Blog</nuxt-link>
            <client-only>
              <button @click="() => $color = $color === 'dark' ? 'light' : 'dark'" type="button" class="link">
                <icon-light v-if="$color === 'light'" />
                <icon-dark v-else />
              </button>
            </client-only>
            <nuxt-link to="/translations" class="link">
              <icon-translation />
            </nuxt-link>
            <nuxt-link to="https://github.com/noonjs" target="_blank" class="link">
              <icon-github />
            </nuxt-link>
          </span>

        </nav>
      </span>

    </span>
    <sun :class="[{ 'translate-y-40': !sunrise || $color === 'dark' }, { 'translate-y-2': sunrise }]" />
    <moon :class="[{ 'translate-y-40': !sunrise || $color === 'light' }, { 'translate-y-2': sunrise }]" />
    <span
      class="flex flex-col bg-gradient-to-b from-yellow-50 to-white dark:from-zinc-800 dark:to-zinc-950 flex-1 z-20">
      <span class="flex flex-1 flex-col mx-1 md:mx-0 md:w-11/12 md:mx-auto min-h-screen">
        <NuxtPage />

      </span>
      <span class="flex mx-1 md:mx-0 md:w-11/12 md:mx-auto py-2 gap-0.5 text-xs items-center">
        <span>© 2025</span> <a href="https://kav3.com" target="_blank">kav3.com</a>. Crafted with <icon-heart
          class="text-red-600" /> and
        dedication.
      </span>
    </span>

  </span>
</template>

<style>
body {
  @apply text-black dark:text-white
}

* {
  @apply outline-none
}

h1 {
  @apply text-3xl font-bold
}

h2 {
  @apply text-2xl
}

h3 {
  @apply text-xl
}

h4 {
  @apply text-lg
}

a:not(nav a) {
  @apply text-sky-600 dark:text-sky-500 underline hover:no-underline
}

svg {
  @apply size-6
}

.sun {
  background: radial-gradient(circle, #fefefc 10%, #faefc8 30%, #f6db7b 100%);
  box-shadow: 0px 10px 20px 1px #ffffffab inset, 0px 0px 20px 2px #fef4cec4;
  filter: blur(1px);
}

.link {
  @apply flex px-1.5 py-1 m-2 items-center gap-1 rounded-full hover:bg-yellow-200 dark:hover:bg-sky-950
}

.btn {
  @apply flex gap-1 no-underline px-3 py-1.5 rounded-md items-center
}

.btn.primary {
  @apply text-white bg-sky-500 hover:bg-sky-600
}

.btn.gray {
  @apply bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-800 dark:text-white
}

.tag {
  @apply bg-zinc-200 dark:bg-zinc-700 px-1 py-0.5 rounded-md
}

.tag.important {
  @apply bg-red-200 text-red-800 dark:bg-red-950 dark:text-red-200
}

section {
  @apply flex flex-col gap-1
}

section.important {
  @apply bg-red-100 dark:bg-red-950 border border-red-800 p-2 rounded-md
}

section.important h4 {
  @apply text-red-800 dark:text-red-400 font-bold
}

section.info {
  @apply bg-sky-100 dark:bg-sky-950 border border-sky-800 p-2 rounded-md
}

section.info h4 {
  @apply text-sky-800 dark:text-sky-400 font-bold
}

.hint {
  @apply text-sm text-zinc-500 dark:text-zinc-400
}

ul {
  @apply list-disc ps-4
}
</style>
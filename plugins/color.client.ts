export default defineNuxtPlugin(async (nuxtApp) => {

    const storage = useBaseStorage()

    const color = ref<string>(await storage?.getItem<string>("color-mode") ?? "light")

    watch(color, async v => {
        if (!v) return

        if (v === "dark")
            document.documentElement.classList.add("dark")
        else
            document.documentElement.classList.remove("dark")

        useHead({
            meta: [
                { name: "theme-color", content: color.value === 'light' ? "#e0e7ff" : "#1e3a8a" }
            ]
        })

        await storage?.setItem("color-mode", v)

    }, { immediate: true })

    return {
        provide: {
            color
        }
    }
})
import { createStorage } from "unstorage"
import localStorageDriver from "unstorage/drivers/localstorage"

export default function useBaseStorage(base = "app") {
    if (import.meta.client)
        return createStorage({
            driver: localStorageDriver({ base })
        })
    return null
}
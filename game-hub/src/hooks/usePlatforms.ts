import {useGeneric} from "./useGeneric";

export interface Platform {
    id: number,
    name: string,
    slug: string

}

export const usePlatforms = () => useGeneric<Platform>("/platforms/lists/parents")
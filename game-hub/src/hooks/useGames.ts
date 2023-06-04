import {useEffect, useState} from "react";
import apiClient from "../services/api-client";

export interface Game{
    id: number
    name: string
    background_image: string
    parent_platforms: PlatformHolder[]
}

interface PlatformHolder{
    platform: Platform
}
interface Platform{
    image_background: string
    name: string
    slug: string
}
interface GetGameResponseBody{
    count: number
    results: Game[]
}

export default function useGames(){

    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        apiClient.get("/games")
            .then(res => {
                console.log(res.data.results)
                setGames(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setIsLoading(false)
            })
    }, [])

    return {games, error, isLoading, setGames, setError}
}
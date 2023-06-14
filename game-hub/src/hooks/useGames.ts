import {DependencyList, useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {AxiosRequestConfig} from "axios";

export interface Game{
    id: number
    name: string
    rating: number
    background_image: string
    parent_platforms: PlatformHolder[]
    genres: Genre[]
}
interface Genre {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
}

interface PlatformHolder{
    platform: Platform
}
interface ParentPlatform {
    platform: {
        id: number
        name: string
        slug: string
    }
}
interface Platform{
    id: string
    name: string
    slug: string
}
interface GetGameResponseBody{
    count: number
    results: Game[]
}

export interface GameOutput
{games:Game[]
    error: string
    isLoading: boolean
    selectedGenre: string | null
    setSelectedGenre: (input: string) => void
    setGames: (input: Game[]) => void
    setError: (input: string) => void
}
export default function useGames(){

    let [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null)

    useEffect(() => {
        setIsLoading(true)
        const abortController = new AbortController()
        const genreParam = {params: {genres:selectedGenre}}
        apiClient.get("/games", {signal: abortController.signal,...genreParam } )
            .then(res => {
                console.log(res.data.results)
                setGames(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setIsLoading(false)
            })
    }, [selectedGenre])
    let g: GameOutput = {games:games,
        error: error,
        isLoading: isLoading,
        selectedGenre: selectedGenre,
        setSelectedGenre: setSelectedGenre,
            setGames: setGames,
        setError: setError}
    return g
}
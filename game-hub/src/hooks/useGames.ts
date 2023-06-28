import {DependencyList, useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {AxiosRequestConfig} from "axios";

export interface GameQuery{
    ordering: string
}
export const sortArray = [
    {key: "Date Created", value:"created"},
    {key: "Last Updated", value:"updated"},
    {key: "Average Rating", value:"rating"},
    {key: "Date Released", value:"released"},
    {key: "Popularity", value:"metacritic"},
]
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
    gameQuery: GameQuery | null,
    setSelectedGenre: (input: string) => void
    setGames: (input: Game[]) => void
    setGameQuery: (input: GameQuery) => void
    setError: (input: string) => void
}
export default function useGames(){

    let [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
    const [gameQuery, setGameQuery] = useState<GameQuery|null>(null)

    useEffect(() => {
        setIsLoading(true)
        const abortController = new AbortController()
        const genreParam = {params: {genres:selectedGenre, ordering: gameQuery?.ordering}}
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
    }, [selectedGenre, gameQuery])
    let g: GameOutput = {games:games,
        error: error,
        isLoading: isLoading,
        selectedGenre: selectedGenre,
        gameQuery: gameQuery,
        setSelectedGenre: setSelectedGenre,
            setGames: setGames,
        setGameQuery: setGameQuery,
        setError: setError}
    return g
}
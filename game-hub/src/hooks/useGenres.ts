import {Game} from "./useGames";
import {useEffect, useState} from "react";
import apiClient from "../services/api-client";

export interface Genre {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
    games: Game[]
}

export function useGenres(){

    const [genres, setGenre] = useState<Genre[]>()
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        apiClient.get('/genres')
            .then(res => {
                setGenre(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
    },[])

    const [selectedGenre, setSelectedGenre] = useState('')
    console.log(selectedGenre)

    return {genres, error, isLoading}
}
import React, {useEffect, useState} from 'react'
import apiClient from "../services/api-client";

interface Game{
    id: number
    name: string
}
interface GetGameResponseBody{
    count: number
    results: Game[]
}
const GameGrid = () => {
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
    }, []) // added dependency array

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <ul>
                {games.map((game) => <li key={game.id}>{game.name}</li>)}
            </ul>
        </div>
    )
}
export default GameGrid

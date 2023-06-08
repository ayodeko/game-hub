import React, {useEffect, useState} from 'react'
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const {games, isLoading, error} = useGames()

    if (error) {
        return <div>Error: {error}</div>
    }
    const fakeGames = [1,2,3,4,5,6,7,8.9]
    return (
        <>
            <SimpleGrid columns={{sm: 1, md: 2, lg:3}} spacing={5} padding={"10px"}>
                {isLoading ? fakeGames.map(x => <GameCardSkeleton/>) : games.map((game) => <GameCard game={game}></GameCard>)}
            </SimpleGrid>
        </>
    )
}
export default GameGrid
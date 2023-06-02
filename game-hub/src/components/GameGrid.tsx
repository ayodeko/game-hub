import React, {useEffect, useState} from 'react'
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
    const {games, isLoading, error} = useGames()
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <>
            <SimpleGrid columns={{sm: 1, md: 2, lg:3}} spacing={5} padding={"10px"}>
                {games.map((game) => <GameCard game={game}></GameCard>)}
            </SimpleGrid>
        </>
    )
}
export default GameGrid

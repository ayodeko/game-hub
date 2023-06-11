import React, {useEffect, useState} from 'react'
import apiClient from "../services/api-client";
import useGames, {GameOutput} from "../hooks/useGames";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from './GameCardContainer';

interface Prop{
    gameOutput: GameOutput
}
const GameGrid = ({gameOutput}: Prop) => {

    if (gameOutput.error) {
        return <div>Error: {gameOutput.error}</div>
    }
    const fakeGames = [1,2,3,4,5,6,7,8.9]
    return (
        <>
            <SimpleGrid columns={{sm: 1, md: 2, lg:3}} spacing={5} padding={"10px"}>
                {gameOutput.isLoading ? fakeGames.map(x => <GameCardContainer><GameCardSkeleton/></GameCardContainer>)
                    : gameOutput.games.map((game) => <GameCardContainer><GameCard game={game}></GameCard></GameCardContainer>)}
            </SimpleGrid>
        </>
    )
}
export default GameGrid
import React, {useEffect, useState} from 'react'
import apiClient from "../services/api-client";
import useGames, {Game, GameOutput} from "../hooks/useGames";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from './GameCardContainer';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

interface Prop{
    gameOutput: GameOutput
    selectedPlatform: string
}
const GameGrid = ({gameOutput, selectedPlatform}: Prop) => {

    if (gameOutput.error) {
        return <div>Error: {gameOutput.error}</div>
    }
    const fakeGames = [1,2,3,4,5,6,7,8.9]
    function refineGames(inputGames: Game[]){
        console.log("selected platform is: "+ selectedPlatform)
        const result =  selectedPlatform == '' ? inputGames : inputGames.filter(game =>
            game.parent_platforms.some(platform => platform.platform.slug === selectedPlatform)
        )
        return result;
    }
    return (
        <>
            <SimpleGrid columns={{sm: 1, md: 2, lg:3}} spacing={5} padding={"10px"}>
                {gameOutput.isLoading ? fakeGames.map(x => <GameCardContainer key={x}><GameCardSkeleton/></GameCardContainer>)
                    : refineGames(gameOutput.games).map((game) => <GameCardContainer key={game.id}><GameCard game={game}></GameCard></GameCardContainer>)}
            </SimpleGrid>
        </>
    )
}
export default GameGrid
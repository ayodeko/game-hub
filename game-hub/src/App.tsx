import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button, Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import AsideGrid from "./components/AsideGrid";
import useGames from "./hooks/useGames";
import PlatformDropDown from "./components/PlatformDropDown";

function App(){

    const gameOutput = useGames()
    const [selectedPlatform, setSelectedPlatform] = useState('')
    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}
        templateColumns={{
            base: "2fr",
            lg: '200px 1fr'
        }}>
            <GridItem area={"nav"}>
                <NavBar></NavBar>
            </GridItem>
            <Show above={"lg"}>
                <GridItem area={"aside"}>
                    <AsideGrid selectedGenre={gameOutput.selectedGenre}  setSelectedGenre={gameOutput.setSelectedGenre}/>
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <PlatformDropDown selectedPlatform={selectedPlatform} onSelect={setSelectedPlatform}/>
                <GameGrid selectedPlatform={selectedPlatform} gameOutput={gameOutput}/>
            </GridItem>
        </Grid>
    )
}
export default App

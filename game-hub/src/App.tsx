import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import AsideGrid from "./components/AsideGrid";
import useGames from "./hooks/useGames";
import PlatformDropDown from "./components/PlatformDropDown";
import OrderingDropDown from "./components/OrderingDropDown";

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
                <NavBar onSubmit={(searchText) => gameOutput.setGameQuery({...gameOutput.gameQuery, searchText: searchText})}></NavBar>
            </GridItem>
            <Show above={"lg"}>
                <GridItem area={"aside"}>
                    <AsideGrid selectedGenre={gameOutput.selectedGenre}  setSelectedGenre={gameOutput.setSelectedGenre}/>
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <HStack spacing={"15px"} padding={"10px"}>
                <PlatformDropDown selectedPlatform={selectedPlatform} onSelect={setSelectedPlatform}/>
                <OrderingDropDown order={gameOutput.gameQuery?.ordering} onSelect={(input) => {gameOutput.setGameQuery({...gameOutput.gameQuery, ordering: input})}}/>
                </HStack>
                <GameGrid selectedPlatform={selectedPlatform} gameOutput={gameOutput}/>
            </GridItem>
        </Grid>
    )
}
export default App

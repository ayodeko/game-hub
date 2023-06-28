import React from 'react'
import {Heading, Spinner, VStack} from "@chakra-ui/react";
import GenreComponent from "./GenreComponent";
import {useGenres} from "../hooks/useGenres";

interface Prop {
    selectedGenre: string
    setSelectedGenre: (input: string) => void
}
const AsideGrid = ({selectedGenre, setSelectedGenre}: Prop) => {
    const {genres, isLoading} = useGenres()
    return (
        <VStack align={"start"} paddingStart={'10px'}>
            <Heading>Genre</Heading>
            {isLoading ? <Spinner /> : genres?.map(genre => <GenreComponent key={genre.slug} genre={genre} selectedGenre={selectedGenre} onSelectedGenre={setSelectedGenre}/>)}
        </VStack>
    )
}
export default AsideGrid

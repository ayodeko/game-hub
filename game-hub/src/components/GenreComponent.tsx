import React, {useState} from 'react'
import {HStack, Image, Link, LinkOverlay, Text} from "@chakra-ui/react";
import {Genre} from "../hooks/useGenres";

interface GenreProps{
    genre: Genre
    selectedGenre: string | null
    onSelectedGenre: (input: string) => void
}
const GenreComponent = ({genre, selectedGenre, onSelectedGenre}: GenreProps) => {



    return (
        <HStack>
            <Image height={'2em'} width={'2em'} borderRadius={'5px'} src={genre.image_background}/>
            <GenreLink genre={genre} selectedGenre={selectedGenre} onSelectedGenre={input => onSelectedGenre(input)}/>
        </HStack>
    )
}


const GenreLink = ({genre, selectedGenre, onSelectedGenre}: GenreProps) => {
    return(
        <Link paddingStart={'5px'} id={genre.slug} onClick={event => {
            const target = event.target as HTMLLinkElement
            onSelectedGenre(target.id)
        }}
              style={selectedGenre === genre.slug ? {fontWeight: 'bold'} : {}}
        >{genre.name}</Link>
    )
}
export default GenreComponent

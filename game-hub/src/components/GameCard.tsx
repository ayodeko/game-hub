import React from 'react'
import {Game} from "../hooks/useGames";
import {Card, CardBody, CardFooter, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
interface Props{
    game: Game
}
const GameCard = ({game}: Props) => {
    return (
        <Card borderRadius={"md"} overflow={"hidden"}>
            <Image src={game.background_image} />
            <CardBody>
                <Heading
                    fontSize={"2xl"}>{game.name}</Heading>
            </CardBody>
            <CardFooter>
                <HStack>
                    <PlatformIcons platforms={game.parent_platforms.map(plat => plat.platform.slug)}></PlatformIcons>
                </HStack>
            </CardFooter>
        </Card>
    )
}
export default GameCard
import React from 'react'
import {Game} from "../hooks/useGames";
import {Badge, Card, CardBody, CardFooter, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import {optimizeImage} from "../services/utility";
interface Props{
    game: Game
}
const GameCard = ({game}: Props) => {
    return (
        <Card borderRadius={"md"} overflow={"hidden"}>
            <Image src={optimizeImage(game.background_image)} />
            <CardBody >
                <HStack justifyContent={"space-between"}>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <Badge variant={"subtle"} colorScheme={"green"}>{game.rating}</Badge>
                </HStack>
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
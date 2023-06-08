import React from 'react'
import {
    Badge,
    Box,
    Card,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    Image,
    Skeleton,
    SkeletonText,
    Text
} from "@chakra-ui/react";
import GameCard from "./GameCard";
import {Game} from "../hooks/useGames";
import {optimizeImage} from "../services/utility";
import PlatformIcons from "./PlatformIcons";

const GameCardSkeleton = () => {

    const g: Game = {id:1, name:"", parent_platforms: [], background_image:"", rating:1}
    return (
        <Card width={'500px'} borderRadius={"md"} overflow={"hidden"}>
            <Skeleton height={'380px'}></Skeleton>
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}
export default GameCardSkeleton

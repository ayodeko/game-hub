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

    return (
        <Card>
            <Skeleton  height={'200px'}>
                <Box width={'300px'}></Box>
            </Skeleton>
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}
export default GameCardSkeleton

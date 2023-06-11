import React, {ReactNode} from 'react'
import {Box} from "@chakra-ui/react";


interface Props{
    children: ReactNode
}
const GameCardContainer = ({children}: Props) => {
    return (
        <Box borderRadius={"md"} overflow={"hidden"}>{children}</Box>
    )
}
export default GameCardContainer

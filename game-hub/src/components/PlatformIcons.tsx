import React from 'react'
import {BsPlaystation, BsWindows, BsGlobe} from "react-icons/bs";
import {FaApple, FaAndroid, FaXbox, FaLinux} from "react-icons/fa";
import {SiNintendo} from "react-icons/si";
import {IconType} from "react-icons";
import {HStack, Icon} from "@chakra-ui/react";

interface Props{
    platforms: string[]
}

const iconMap: { [key: string]: IconType } = {
    playstation: BsPlaystation,
    pc: BsWindows,
    web:BsGlobe,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    xbox: FaXbox,
    nintendo: SiNintendo
}
const PlatformIcons = ({platforms}: Props) => {
    return (
        <HStack>
            {platforms.map(platform => {
                return <Icon key={platform} color={"gray.500"} as={iconMap[platform]}/>
            })}
        </HStack>
    )
}
export default PlatformIcons

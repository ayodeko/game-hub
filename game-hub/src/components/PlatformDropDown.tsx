import React from 'react'
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronBarDown} from "react-icons/bs";
import {Platform, usePlatforms} from "../hooks/usePlatforms";

interface Props{
    onSelect: (input: string) => void
    selectedPlatform: string
}
const PlatformDropDown = ({onSelect, selectedPlatform}: Props) => {
    const {data}= usePlatforms()
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>{data.find(x => x.slug === selectedPlatform)?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data.map(platform => {
                    return <MenuItem key={platform.id} id={platform.id+""}
                                     onClick={event => {
                                         const target = event.target as HTMLSelectElement
                                         onSelect(platform.slug)
                                     }
                                     }
                    >{platform.name}</MenuItem>
                })}
            </MenuList>
        </Menu>
    )
}
export default PlatformDropDown

import React from 'react'
import {Box, Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {sortArray} from "../hooks/useGames";
import {BsChevronBarDown} from "react-icons/bs";

interface Props{
    onSelect : (input: string) => void
    order: string | undefined
}
const OrderingDropDown = ({onSelect, order}: Props) => {
    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronBarDown />}> {sortArray.find(x => x.value == order)?.key??'Relevance'} </MenuButton>
                <MenuList>
                    {sortArray.map(x =>
                        <MenuItem key={x.key}
                    onClick={() => onSelect(x.value)}>
                        {x.key}</MenuItem>)}
                </MenuList>
            </Menu>
        </Box>
    )
}
export default OrderingDropDown

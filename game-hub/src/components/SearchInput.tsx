import React, {useRef} from 'react'
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

interface Prop{
    onSearchSubmit: (input: string) => void;
}
const SearchInput = ({onSearchSubmit}: Prop) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            inputRef.current && onSearchSubmit(inputRef.current.value)
        }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch/>} />
        <Input ref={inputRef} borderRadius={"20px"} placeholder={"Search games.."} variant={"filled"}></Input>
        </InputGroup>
        </form>
    )
}
export default SearchInput

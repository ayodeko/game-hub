import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/128.png"
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";
interface Prop{
    onSubmit: (input: string) => void
}
export default function NavBar({onSubmit}: Prop){
    return(
        <HStack padding={"1rem"} justifyContent={"space-between"}>
            <Image borderRadius={"20px"} src={logo} boxSize={"60px"}></Image>
            <SearchInput onSearchSubmit={onSubmit}/>
            <DarkModeSwitch/>
        </HStack>
    )
}
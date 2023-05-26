import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/128.png"
import DarkModeSwitch from "./DarkModeSwitch";

export default function NavBar(){
    return(
        <HStack padding={"1rem"} justifyContent={"space-between"}>
            <Image src={logo} boxSize={"60px"}></Image>
            <DarkModeSwitch/>
        </HStack>
    )
}
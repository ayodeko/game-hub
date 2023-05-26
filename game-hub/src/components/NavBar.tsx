import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/128.png"

export default function NavBar(){
    return(
        <HStack padding={"1rem"}>
            <Image src={logo} boxSize={"60px"}></Image>
            <Text>NavBar</Text>
        </HStack>
    )
}
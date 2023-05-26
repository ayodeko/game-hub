import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";


function DarkModeSwitch(){

    const {toggleColorMode, colorMode} = useColorMode()

    return(
        <HStack paddingEnd={"10px"}>
            <Switch colorScheme={'green'} isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text color={"red"}>Dark Mode</Text>
        </HStack>
    )
}

export default DarkModeSwitch;
import { Input, Text, Icon, Box, VStack, FormControl, HStack, Select, Button } from "native-base"
import React from "react"
import { Feather } from '@expo/vector-icons';


export default function(){

    const InpLeftElement = <Icon ml={3} as={<Feather name="search" size={24} color="black" />} /> 

    return (
        <VStack>
            <FormControl mb={3}>
                <FormControl.Label isRequired>Search Movie/Tv Shows</FormControl.Label>
                <Input placeholder="i.e James Bond, CSI" InputLeftElement={InpLeftElement} py={4} px={2} width={300} borderWidth={0} backgroundColor="muted.300"/>

                <FormControl.Label isRequired>Choose Search Type</FormControl.Label>
                <HStack space={4} alignItems="center">
                    <Select width={200}>
                        <Select.Item label="movies" value="movies"/>
                        <Select.Item label="multi" value="multi" />
                        <Select.Item label="tv" value="tv" />
                    </Select>
                    <Button colorScheme="lightBlue" width={100}>Search</Button>
                </HStack>
                <Text>Please select a search type</Text>
            </FormControl>
        </VStack>
    )     
}
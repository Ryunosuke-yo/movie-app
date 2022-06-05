import React from "react"
import { HStack,Spinner, Heading } from "native-base";


export default function(){

    return (
        <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading  fontSize="md">
                Now Loading....
            </Heading>
        </HStack>
    )
}
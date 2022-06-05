import React from "react"
import Picker from "./Picker"


export default function({mapMovies, }){

    return (
    <Center>
        <Picker />
        <ScrollView>
            {mapMovies}
        </ScrollView>
    </Center>
    )
}
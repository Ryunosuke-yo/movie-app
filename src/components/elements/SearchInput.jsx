import { Input, Text, Icon, Box, VStack, FormControl, HStack, Select, Button, CheckIcon} from "native-base"
import React from "react"
import { Feather } from '@expo/vector-icons';


export default function({props}){
    const {inpValue, handleInp, onSubmit, selectValue, setSelectValue, showError} = props

    const InpLeftElement = <Icon ml={3} as={<Feather name="search" size={24} color="black" />} /> 

    const selected = {
        backgroundColor : "green.600",
        endIcon: <CheckIcon size="5" color="white"/>,
        borderRadius : "10"
    }

    return (
        <VStack>
            <FormControl mb={3}>
                <FormControl.Label isRequired>Search Movie/Tv Shows</FormControl.Label>
                <Input placeholder="i.e James Bond, CSI" InputLeftElement={InpLeftElement} py={4} px={2} width={300} borderWidth={0} backgroundColor="muted.300" value={inpValue} onChangeText={handleInp}/>

                {showError && <Text>This field is required</Text>}

                <FormControl.Label isRequired>Choose Search Type</FormControl.Label>
                <HStack space={4} alignItems="center">
                    <Select width={200} defaultValue="movies" onValueChange={(v)=>setSelectValue(v)} selectedValue={selectValue} _selectedItem={selected}>
                        <Select.Item label="movies" value="movie" _text={selectValue == "movies" ? {color : "white"} : null}/>
                        <Select.Item label="multi" value="multi" _text={selectValue == "multi" ? {color : "white"} : null} />
                        <Select.Item label="tv" value="tv" _text={selectValue == "tv" ? {color : "white"} : null}/>
                    </Select>
                    <Button colorScheme="lightBlue" width={100} onPress={()=>onSubmit()}>Search</Button>
                </HStack>
                <Text>Please select a search type</Text>
            </FormControl>
        </VStack>
    )     
}
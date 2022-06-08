import { useNavigation } from '@react-navigation/native';
import { Button, Image, Text, VStack, HStack} from 'native-base';
import React, {useContext} from 'react';
import { MovieContext } from '../Context/movieContext';

const  MovieWrapper = ({movie, screen}) => {
    const {title, id, popularity, release_date:date, poster_path:baseUrl, name } = movie   
    const {dispatch} = useContext(MovieContext) 
    const imgUrl = `https://image.tmdb.org/t/p/w500${baseUrl}`
    const titleValue = title ? title : name ? name : null


    const onPress = ()=>{
        dispatch({type : "SELECTEDITEM", selectedItem : movie})
        navigation.navigate("details")
    }
    


    const navigation = useNavigation()
    return (
        <HStack marginBottom={7}>
            <Image src={imgUrl} alt="alt" size="xl"/>
            <VStack marginLeft={4} width={230}>
                <Text fontWeight="bold" fontSize="xl">{titleValue}</Text>
                <Text>Popularity: {popularity}</Text>
                <Text>Release Date : {date}</Text>
                <Button colorScheme="lightBlue" paddingTop={4} paddingBottom={4} onPress={()=>onPress()}>More Details</Button>
            </VStack>
        </HStack>
    );
}

export default MovieWrapper;

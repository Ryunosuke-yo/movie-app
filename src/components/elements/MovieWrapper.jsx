import { useNavigation } from '@react-navigation/native';
import { Button, Image, Text, VStack, HStack} from 'native-base';
import React from 'react';

const  MovieWrapper = ({movies, screen}) => {
    const {original_title, id, popularity, release_date:date, poster_path:baseUrl, name } = movies
    const imgUrl = `https://image.tmdb.org/t/p/w500${baseUrl}`
    const title = screen == "movies" ? original_title : name

    const navigation = useNavigation()
    return (
        <HStack marginBottom={6}>
            <Image src={imgUrl} alt="alt" size="xl"/>
            <VStack marginLeft={4} width={230}>
                <Text fontWeight="bold" fontSize="xl">{title}</Text>
                <Text>Popularity: {popularity}</Text>
                <Text>Release Date : {date}</Text>
                <Button colorScheme="lightBlue" paddingTop={4} paddingBottom={4} onPress={()=>navigation.navigate("details")}>More Details</Button>
            </VStack>
        </HStack>
    );
}

export default MovieWrapper;

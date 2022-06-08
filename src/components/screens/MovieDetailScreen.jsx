import { useNavigation } from '@react-navigation/native';
import { Image, VStack, Text, Center } from 'native-base';
import React , {useContext, useEffect} from 'react';
import { MovieContext } from '../Context/movieContext';

const MovieDetailScreen = ({navigation}) => {
    const {state} = useContext(MovieContext)
    const {selectedItem} = state
    const {title, popularity, release_date:date, poster_path:baseUrl, name, overview } = selectedItem
    const imgUrl = `https://image.tmdb.org/t/p/w500${baseUrl}`
    const titleValue = title ? title : name ? name : null

    return (
        <>
            <Center>
                <Text fontWeight="bold" fontSize="3xl" paddingY={50}>{titleValue}</Text>
                <Image src={imgUrl} size="2xl" alt="alt"/>
            </Center>
            <VStack  paddingX={10}>
                <Text paddingY={10}>{overview}</Text>
                <Text>Popularity: {popularity} | Release Date: {date}</Text>
            </VStack>
            </>
    );
}

export default MovieDetailScreen;

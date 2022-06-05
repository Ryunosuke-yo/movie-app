import { Image, VStack, Text, Center } from 'native-base';
import React from 'react';

const MovieDetailScreen = () => {
    const imgUrl = {
        uri: "https://wallpaperaccess.com/full/317501.jpg"
    }
    return (
        <>
            <Center>
                <Text fontWeight="bold" fontSize="3xl" paddingY={50}>What if...</Text>
                <Image source={imgUrl} size="2xl" alt="alt"/>
            </Center>
            <VStack  paddingX={10}>
                <Text paddingY={10}>ncdsbcduszbcdszvcvjsdzvcdskzcdslkzc dzvjbsvshvcudsVCdshjVxsdHJCVJdsjVuivxsuajubuujvbsuicvsuiCvdsivcdusILcuvdsivcd.iscvd.;sk</Text>
                <Text>Popularity: 1987.90 | Release Date: </Text>
            </VStack>
            </>
    );
}

export default MovieDetailScreen;

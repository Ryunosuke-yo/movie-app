import React,  {useEffect, useState, createContext} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import AppTabStack from "./AppTabStack";
import MovieDetailScreen from "../screens/MovieDetailScreen";
import axios from "axios";
import { MovieContext } from "../Context/movieContext";

const Stack = createNativeStackNavigator();

export default function(){
    const [movies, setMovies] = useState()
    const [moviesToGet, setMoviesToGet] = useState("popular")

    const [tvSHows, setTvShows] = useState()
    const [tvShowsToGet, setTvShowsToGet] = useState("popular")

    
    const contextValue = {movies, setMovies, setMoviesToGet, moviesToGet, tvShowsToGet, setTvShowsToGet}

    const option = {
        headerStyle : {
            backgroundColor : "#4f5259",
        }, 
        headerTintColor: '#fff',
    }

    return (
    <MovieContext.Provider value={contextValue}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Movies app" component={AppTabStack} options={option}/>
                <Stack.Screen name="details" component={MovieDetailScreen} options={{
                    headerBackTitle : "Back to the list"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    </MovieContext.Provider>
        
    )
}
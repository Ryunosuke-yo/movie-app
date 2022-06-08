import React,  {useEffect, useState, createContext, useReducer} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import AppTabStack from "./AppTabStack";
import MovieDetailScreen from "../screens/MovieDetailScreen";
import axios from "axios";
import { MovieContext } from "../Context/movieContext";

const Stack = createNativeStackNavigator();

const initialState = {
    movies : [],
    moviesToGet : "popular",
    tvShowsToGet : "popular",
    id : 0,
    selectedItem : {},
    isLoading : true,
    slicedMovies : {}
}

const reducer = (state, action)=>{
    switch(action.type){
        case "MOVIES" :
            return {...state, movies : action.movies, }
        case "MOVIESTOGET" :
            return {...state, moviesToGet : action.moviesToGet}
        case "TVSHOWSTOGET" :
            return {...state, tvShowsToGet : action.tvShowsToGet}
        case "ID" :
            return {...state, id : action.id}
        case "SELECTEDITEM" : 
            return {...state, selectedItem : action.selectedItem}
        case "ISLOADING" : 
            return {...state, isLoading : false}
        case "SLICEMOVIE" : 
            return {...state, slicedMovies : action.slicedMovies}
    }
}

export default function(){
    const [state, dispatch] = useReducer(reducer, initialState)    
    const contextValue = {dispatch, state}

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

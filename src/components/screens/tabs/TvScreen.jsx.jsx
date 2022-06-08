import React, {useContext, useCallback, useEffect, useState} from "react"
import MovieWrapper from "../../elements/MovieWrapper"
import { Center, ScrollView } from "native-base"
import Picker from "../../elements/Picker"
import { MovieContext } from "../../Context/movieContext"
import { useFocusEffect } from '@react-navigation/native'
import axios from "axios"
import MovieRender from "../../elements/MovieRender"
import { tvGenre } from "../../genre"
import Loading from "../../loading/Loading"
import ApiKey from "../../ApiKey"

export default function(){
    const {dispatch, state} = useContext(MovieContext)
    const {movies, tvShowsToGet, isLoading} = state
    

    useFocusEffect(
        useCallback(() => {
            const getPopular = async ()=>{
                const res = await axios.get(`https://api.themoviedb.org/3/tv/${tvShowsToGet}?api_key=${ApiKey}&language=en-US&page=1`)
                // setMovies(res.data.results)
                dispatch({type : "MOVIES", movies : res.data.results})
                dispatch({type : "ISLOADING", isLoading : false})
                // console.log(res.data)
            }
            getPopular()
        }, [tvShowsToGet])
    )
    
    

    
    
    const mapMovies = movies?.map(movie=> <MovieWrapper movie={movie} key={movie.id} screen="tv"/>)

    return (
        <Center>
        <Picker genre={tvGenre} screen="tv"/>
        {isLoading ? <Loading /> :
        <ScrollView>
            {mapMovies}
        </ScrollView>
        
    }
    </Center>
    )
}


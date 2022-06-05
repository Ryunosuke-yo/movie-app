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

export default function(){
    const {movies, moviesToGet, setMovies, tvShowsToGet} = useContext(MovieContext)
    const [isLoading, setIsLoading] = useState(true)
    

    useFocusEffect(
        useCallback(() => {
            const getPopular = async ()=>{
                const res = await axios.get(`https://api.themoviedb.org/3/tv/${tvShowsToGet}?api_key=27a32fa020f15e8bb320562600a826c6&language=en-US&page=1`)
                setMovies(res.data.results)
                // console.log(res.data)
                setIsLoading(false)
            }
            getPopular()
        }, [tvShowsToGet])
    )
    
    

    
    
    const mapMovies = movies?.map(movie=> <MovieWrapper movies={movie} key={movie.id} screen="tv"/>)

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


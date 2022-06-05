import React, {useContext, useCallback, useState, useEffect} from "react"
import { Center, ScrollView } from "native-base"
import MovieWrapper from "../../elements/MovieWrapper"
import Picker from "../../elements/Picker"
import { MovieContext } from "../../Context/movieContext"
import { useFocusEffect } from '@react-navigation/native'
import axios from "axios"
import MovieRender from "../../elements/MovieRender"
import { movieGenre } from "../../genre"
import Loading from "../../loading/Loading"

export default function(){
    const {movies, moviesToGet, setMovies} = useContext(MovieContext)
    const [isLoading, setIsLoading] = useState(true)
    
    
    useFocusEffect(
        useCallback(() => {
            const getPopular = async ()=>{
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${moviesToGet}?api_key=27a32fa020f15e8bb320562600a826c6&language=en-US&page=1`)
                setMovies(res.data.results)
                setIsLoading(false)
                // console.log(res.data)
            }
            getPopular()
        }, [moviesToGet])
    )


    
    
    const mapMovies = movies?.map(movie=> <MovieWrapper movies={movie} key={movie.id} screen="movies"/>)

    return (
        <Center>
            <Picker genre={movieGenre} screen="movies"/>
           { isLoading ? <Loading /> :
            <ScrollView>
                {mapMovies}
            </ScrollView>
            }
        </Center>
    )
}


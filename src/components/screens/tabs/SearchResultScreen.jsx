import React, {useContext, useCallback} from "react"
import MovieWrapper from "../../elements/MovieWrapper"
import { Center, ScrollView } from "native-base"
import Picker from "../../elements/Picker"
import { MovieContext } from "../../Context/movieContext"
import { useFocusEffect } from '@react-navigation/native'
import axios from "axios"
import MovieRender from "../../elements/MovieRender"
import SearchInput from "../../elements/SearchInput"

export default function(){
    const {movies, moviesToGet, setMovies} = useContext(MovieContext)

    // useFocusEffect(
    //     useCallback(() => {
    //         const getPopular = async ()=>{
    //             const res = await axios.get(`https://api.themoviedb.org/3/movie/${moviesToGet}?api_key=27a32fa020f15e8bb320562600a826c6&language=en-US&page=1`)
    //             setMovies(res.data.results)
    //             // console.log(res.data)
    //         }
    //         getPopular()
    //     }, [moviesToGet])
    // )


    
    
    const mapMovies = movies?.map(movie=> <MovieWrapper movies={movie} key={movie.id}/>)

    return (
        <Center>
            <SearchInput />
            <ScrollView>
                {mapMovies}
            </ScrollView>
        </Center>
    )
}

import React, {useContext, useCallback, useState, useEffect} from "react"
import { Box, Button, Center, ScrollView} from "native-base"
import MovieWrapper from "../../elements/MovieWrapper"
import Picker from "../../elements/Picker"
import { MovieContext } from "../../Context/movieContext"
import { useFocusEffect } from '@react-navigation/native'
import axios from "axios"
import MovieRender from "../../elements/MovieRender"
import { movieGenre } from "../../genre"
import Loading from "../../loading/Loading"
import ApiKey from "../../ApiKey"

export default function(){
    const {dispatch, state} = useContext(MovieContext)
    const {moviesToGet, movies, isLoading} = state

    // const [slicedMovies, setSlicedMovies] = useState()
    
    
    useFocusEffect(
        useCallback(() => {
            const getPopular = async ()=>{
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${moviesToGet}?api_key=${ApiKey}&language=en-US&page=1`)
                // setMovies(res.data.results)
                dispatch({type : "MOVIES", movies : res.data.results})
                dispatch({type : "ISLOADING", isLoading : false})                
                // console.log(res.data)
            }
            getPopular()
        }, [moviesToGet])
        )
        
        const mapMovies = movies?.map(movie=> <MovieWrapper movie={movie} key={movie.id} screen="movie"/>)
   
   
    return (
        <Center>
            <Picker genre={movieGenre} screen="movie"/>
           { isLoading ? <Loading /> :
            <ScrollView>
                <Box paddingBottom={16}>
                {mapMovies}
                {/* <Button>s</Button> */}
                </Box>
            </ScrollView>
            }
        </Center>
    )
}


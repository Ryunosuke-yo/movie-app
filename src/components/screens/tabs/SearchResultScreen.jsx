import React, {useContext, useCallback, useState, useEffect} from "react"
import MovieWrapper from "../../elements/MovieWrapper"
import { Center, ScrollView, Text } from "native-base"
import Picker from "../../elements/Picker"
import { MovieContext } from "../../Context/movieContext"
import { useFocusEffect } from '@react-navigation/native'
import axios from "axios"
import SearchInput from "../../elements/SearchInput"
import ApiKey from "../../ApiKey"

export default function({navigation, route}){
    const {state, dispatch} = useContext(MovieContext)
    const {movies, moviesToGet, tvShowsToGet, isLoading} = state 

    const [inpValue, setInpValue ]= useState()
    const [selectValue, setSelectValue] = useState("movie")
    const [showInitiateSearch, setShowInitiateSearch] = useState(true)
    const handleInp = t=>{
        setInpValue(t)
    }

    useEffect(()=>{
        console.log(route)
    })

    const onSubmit = async ()=>{
        console.log(inpValue, selectValue)
        const res = await axios.get(`https://api.themoviedb.org/3/search/${selectValue}?api_key=${ApiKey}&language=en-US&page=1&include_adult=false&query=${inpValue}`)
        dispatch({type : "MOVIES", movies : res.data.results})
        dispatch({type : "ISLOADING", isLoading : false})
        setShowInitiateSearch(false)
        setInpValue("")

    }
    
    useFocusEffect(
        useCallback(() => {
            setShowInitiateSearch(true)
        }, [])
    )
    const props = {inpValue, handleInp, onSubmit, selectValue, setSelectValue}
    
    const mapMovies = movies?.map(movie=> <MovieWrapper movie={movie} key={movie.id} screen={selectValue}/>)

    return (
        <Center>
            <SearchInput props={props}/>
            {showInitiateSearch ? <Text fontSize="xl">Please initiate search</Text> : 
            <ScrollView>
                {mapMovies}
            </ScrollView>      
            }
        </Center>
    )
}


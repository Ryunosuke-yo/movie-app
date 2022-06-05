import React, {useState, useContext, useEffect} from "react"
import { Box, Center, Select, CheckIcon } from "native-base";
import { MovieContext } from "../Context/movieContext";


export default function({genre, screen}){
    const {setMoviesToGet, moviesToGet, tvShowsToGet, setTvShowsToGet} = useContext(MovieContext)

    const tvOrShows = screen == "movies" ? moviesToGet : tvShowsToGet

    const setTvOrMovies = (v)=>{
        screen == "movies" ? setMoviesToGet(v) : setTvShowsToGet(v)
    }

    

    const selected = {
        backgroundColor : "green.600",
        endIcon: <CheckIcon size="5" color="white"/>,
        borderRadius : "10"
    }

    const mapInput = genre.map(g=>
        <Select.Item label={g.label} value={g.value} _text={tvOrShows == g.value ? {color : "white"} : null}  key={g.label}/>
        ) 


    return (
            <Box padding={30}>
                <Select selectedValue={tvOrShows} width={190} onValueChange={(v)=>setTvOrMovies(v)} defaultValue="popular" _selectedItem={selected} >
                    {mapInput}
                </Select>
            </Box>
    )
}
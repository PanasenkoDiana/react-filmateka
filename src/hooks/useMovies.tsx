import { useState, useEffect } from "react"
import { IMovie } from "../shared/types/types"

export function useMovies() {
    const [movies, setMovies] = useState< IMovie[ ]>([])

    useEffect(() => {
        async function getMovies() {
            const response = await fetch("http://localhost:8000/api/movies")
            const data = await response.json()
            setMovies(data)
        }
        getMovies()
    }, [])

    return { movies: movies }
}
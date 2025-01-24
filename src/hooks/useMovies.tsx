import { useState, useEffect } from "react"

export function useMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function getMovies() {
            const response = await fetch("https://www.freetestapi.com/api/v1/movies")
            const data = await response.json()
            setMovies(data)
        }
        getMovies()
    }, [])

    return { movies: movies }
}
import { useState, useEffect } from "react"

export function useMovies() {
    const [movies, setMovies] = useState([])

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
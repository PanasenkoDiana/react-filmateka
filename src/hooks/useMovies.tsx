import { useState, useEffect } from "react"
import { IMovie } from "../shared/types/types"

export function useMovies() {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()


    useEffect(() => {
        async function getMovies() {
            try {
                const response = await fetch("http://localhost:8000/api/movies")
                const result = await response.json()
                if (result.status === 'success') {
                    setMovies(result.data)
                }
                else {
                    setError(result.message)
                }
            } catch (error) {
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            } finally {
                setIsLoading(false)
            }
        }
        getMovies()
    }, [])

    return { movies: movies, isLoading: isLoading, error: error }
}
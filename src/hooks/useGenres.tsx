import { useState, useEffect } from "react"
import { IGenre } from "../shared/types/types"

export function useGenres() {
    const [genres, setGenres] = useState< IGenre[] >([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    
    useEffect(()=>{
        async function getGenres() {
            try {
                const response = await fetch("http://localhost:8000/api/genres")
                const result = await response.json()
                if (result.status === 'success') {
                    setGenres(result.data)
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
        getGenres()
    },[])
    return {genres: genres, isLoading: isLoading, error: error}
}
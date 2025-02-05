import { useState, useEffect } from 'react'
import { IMovie } from '../interfaces'

// https://fakestoreapi.com/products/id
export function useMovieById(id: number) {
    const [movie, setMovie] = useState<IMovie>()

    useEffect(() => {
        async function getMovie() {
            const response = await fetch(`http://localhost:8000/api/movie/${id}`)
            const data = await response.json()
            setMovie(data)
        }
        getMovie()
    }, [])

    return {movie: movie}
}
import { useState, useEffect } from 'react'
import { IMovie } from '../interfaces'

// export interface IMovie{
//     id: number
//     title: string
//     year: number
//     genre : []
//     runtime: number
//     director: string
//     actors: []
//     poster: string
//     country: string
//     plot: string
// }
// https://fakestoreapi.com/products/id
export function useMovieById(id: number) {
    const [movie, setMovie] = useState<IMovie>()



    useEffect(() => {
        async function getMovie() {
            const response = await fetch(`https://www.freetestapi.com/api/v1/movies/${id}`)
            const data = await response.json()
            setMovie(data)
        }
        getMovie()
    }, [])

    return {movie: movie}
}
import { useState, useEffect } from "react"
import { IGenre } from "../shared/types/types"

export function useGenres() {
    const [genres, setGenres] = useState< IGenre[] >([])

    useEffect(() => {
        async function getGenres() {
            const response = await fetch("http://localhost:8000/api/genres")
            const data = await response.json()
            setGenres(data)
        }
        getGenres()
    }, [])

    return { genres: genres }
}
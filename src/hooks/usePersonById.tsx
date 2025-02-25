import { useState, useEffect } from "react"
import { IPerson } from "../shared/types/types"

export function usePersonById(id: number) {
    const [person, setPerson] = useState< IPerson >()

    useEffect(() => {
        async function getPerson() {
            const response = await fetch(`http://localhost:8000/api/person/${id}`)
            const data = await response.json()
            setPerson(data)
        }
        getPerson()
    }, [])

    return { person: person }
}
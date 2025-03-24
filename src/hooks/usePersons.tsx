import { useEffect, useState } from "react";
import { IPerson } from "../shared/types/types";




export function usePersons() {
    const [persons, setPersons] = useState<IPerson[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    const getPersons = async ()=>{
        try {
            setIsLoading(true)
            const response = await fetch('http://localhost:8000/api/persons')
            const result = await response.json()
            if (result.status === 'success') {
                setPersons(result.data)
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

    useEffect(()=>{
        getPersons()
    }, [])
    return {persons, isLoading, error, refetch: getPersons}
}
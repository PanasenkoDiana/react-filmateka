import { useEffect, useState } from "react";
import { IUser } from "../shared/types/types";
import { error } from "console";



export function useUsers() {
    const [users, setUsers] = useState<IUser[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(()=>{
        async function getUsers(){
            try {
                setIsLoading(true)
                const response = await fetch('http://localhost:8000/api/users')
                const result = await response.json()
                if (result.status === 'success') {
                    setUsers(result.data)
                }
                else {
                    setError(result.message)
                }
            }
            catch (error) {
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally {
                setIsLoading(false)
            }
        }
        getUsers()
    },[])
    return {users: users, isLoading: isLoading, error: error}

}
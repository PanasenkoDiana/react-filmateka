import { useState, useEffect } from "react";
import { IMovie } from "../shared/types/types";

export function useMovies() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const getMovies = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:8000/api/movies");
            const result = await response.json();
            if (result.status === "success") {
                setMovies(result.data);
            } else {
                setError(result.message);
            }
        } catch (error) {
            const err = error instanceof Error ? error.message : "Unknown error";
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return { movies, isLoading, error, refetch: getMovies };
}

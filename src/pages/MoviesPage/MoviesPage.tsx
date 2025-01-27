import { useState, useEffect } from 'react'

import { MovieCard } from '../../shared/MovieCard/MovieCard'
import { useMovies } from '../../hooks/useMovies'
import { IMovie } from '../../interfaces'

import './MoviesPage.css';

export function MoviesPage(){
    const { movies } = useMovies()

    const [filteredMovies, setFilteredMovies] = useState([])
    const [selectedFilter, setSelectedFilter] = useState("All Genres")   

    const movieGenresSelect = [
        { en: "All Genres", uk: "Всі жанри" },
        { en: "Action", uk: "Екшн" },
        { en: "Adventure", uk: "Пригоди" },
        { en: "Crime", uk: "Кримінал" },
        { en: "Drama", uk: "Драма" },
        { en: "Fantasy", uk: "Фентезі" },
        { en: "History", uk: "Історія" },
        { en: "Mystery", uk: "Містика" },
        { en: "Romance", uk: "Романтика" },
        { en: "Sci-Fi", uk: "Наукова фантастика" },
        { en: "Thriller", uk: "Трилер" },
        { en: "War", uk: "Війна" }
    ];

    useEffect(() => {
        if (selectedFilter === "All Genres") {
            setFilteredMovies(movies)
        } else {
            setFilteredMovies(movies.filter((movie: IMovie) => {
                return movie.genre.includes(selectedFilter)
            }))
        }
    }, [movies, selectedFilter])

    return (
        <div id="moviesPage">
            <div id="filtersContainer">
                <div>
                    <p id="filterGenreText">Жанр:</p>
                    <select name="genreSelect" id="genreSelect" onChange={(event) =>
                        setSelectedFilter(event.target.value)
                        }>
                        {movieGenresSelect.map((movieGenresSelect) => 
                            <option value={ movieGenresSelect.en }>{ movieGenresSelect.uk }</option>
                        )}
                    </select>
                </div>
            </div>
            <div id="moviesConteiner">
                <h2 id="moviesText">Фільми:</h2>
                <div id="moviesList">
                    {filteredMovies.map((movie: IMovie) =>{
                        return (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.year}
                                genre={movie.genre}
                                runtime={movie.runtime}
                                director={movie.director}
                                actors={movie.actors}
                                poster={movie.poster}
                                country={movie.country}
                                plot={movie.plot}
                            ></MovieCard>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
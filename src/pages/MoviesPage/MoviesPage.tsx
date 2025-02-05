import { useState, useEffect } from 'react'

import { MovieCard } from '../../shared/MovieCard/MovieCard'
import { useMovies } from '../../hooks/useMovies'
import { useGenres } from '../../hooks/useGenres';

import { IMovie, IGenre } from '../../interfaces'

import './MoviesPage.css';

export function MoviesPage(){
    const { movies } = useMovies()
    const { genres } = useGenres()

    const [filteredMovies, setFilteredMovies] = useState< IMovie[] >([])
    const [checkedGenres, setCheckedGenres] = useState< string[] >([]) 

    function selectGenres(genre: string) {
        if (checkedGenres.includes(genre)){
            setCheckedGenres(
                checkedGenres.filter((checkedGenre) => checkedGenre !== genre)
            )
        } else {
            setCheckedGenres([...checkedGenres, genre])
        }
    }

    useEffect(() => {
        if (checkedGenres.length === 0) {
            setFilteredMovies(movies)
        } else {
            setFilteredMovies(
                movies.filter((movie: IMovie) => {
                    return checkedGenres.every((genre: string) => movie.genres.some((g: IGenre) => g.name === genre))
                })
            )
        }
    }, [movies, checkedGenres])

    return (
        <div id="moviesPage">
            <div id="filtersContainer">
                <div>
                    <p id="filterGenreText">Жанр:</p>
                    {genres.map((genre) =>
                    <div>
                        <input type="checkbox" name={ genre.name } value={ genre.name } onChange={() => {selectGenres(genre.name)}}/>
                        <label htmlFor={ genre.name } className="genreLabel">{ genre.name }</label>
                    </div>
                    )}
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
                            releaseYear={movie.releaseYear}
                            mainLanguage={movie.mainLanguage}
                            productionCountry={movie.productionCountry}
                            ageRating={movie.ageRating}
                            shortDescription={movie.shortDescription}
                            userReviews={movie.userReviews}
                            genres={movie.genres}
                            movieStills={movie.movieStills}
                            runtime={movie.runtime}
                            actors={movie.actors}
                            poster={movie.poster}
                            ></MovieCard>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
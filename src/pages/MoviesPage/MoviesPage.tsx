import { useState, useEffect } from 'react';
import { MovieCard } from '../../shared/MovieCard/MovieCard';
import { useMovies } from '../../hooks/useMovies';
import { useGenres } from '../../hooks/useGenres';
import { IMovie, IGenre } from '../../shared/types/types';

import './MoviesPage.css';

export function MoviesPage() {
    const { movies } = useMovies();
    const { genres } = useGenres();

    const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);
    const [checkedGenres, setCheckedGenres] = useState<string[]>([]);

    function selectGenres(genre: string) {
        setCheckedGenres((prevCheckedGenres) =>
            prevCheckedGenres.includes(genre)
                ? prevCheckedGenres.filter((checkedGenre) => checkedGenre !== genre)
                : [...prevCheckedGenres, genre]
        );
    }

    useEffect(() => {
        if (!Array.isArray(movies)) {
            setFilteredMovies([]);
            return;
        }

        if (checkedGenres.length === 0) {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(
                movies.filter((movie: IMovie) =>
                    checkedGenres.every((genre: string) =>
                        movie.genres?.some((g: IGenre) => g.name === genre)
                    )
                )
            );
        }
    }, [movies, checkedGenres]);

    return (
        <div id="moviesPage">
            <div id="filtersContainer">
                <div id="filterGenresContainer">
                    <h3 id="filterGenresText">Жанр:</h3>
                    {Array.isArray(genres) ? (
                        genres.map((genre) => (
                            <div className='filterGenreBox' key={genre.name}>
                                <input
                                    type="checkbox"
                                    id={genre.name}
                                    className='genreCheckbox'
                                    name={genre.name}
                                    value={genre.name}
                                    onChange={() => selectGenres(genre.name)}
                                />
                                <label htmlFor={genre.name} className="genreLabel">{genre.name}</label>
                            </div>
                        ))
                    ) : (
                        <p>Загрузка жанров...</p>
                    )}
                </div>
            </div>
            <div id="moviesConteiner">
                <h2 id="moviesText">Фільми:</h2>
                <div id="moviesList">
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((movie: IMovie) => (
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
                                genres={movie.genres || []}
                                movieStills={movie.movieStills}
                                runtime={movie.runtime}
                                persons={movie.persons}
                                poster={movie.poster}
                                recentlyViewedMovie={movie.recentlyViewedMovie}
                            />
                        ))
                    ) : (
                        <p>Фильмы не найдены.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

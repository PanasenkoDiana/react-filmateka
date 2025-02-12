import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IMovie } from '../../interfaces';
import './Movie.css';

export function Movie() {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<IMovie | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Временно: получаем демо-фильм
        const demoMovie: IMovie = {
            id: Number(id),
            title: "Веном",
            poster: "https://www.sonypictures.co.uk/sites/unitedkingdom/files/styles/max_n_x_365_/public/2024-10/2481_SP_VENOM_POSTER_1-Sheet_OutNow.jpg?itok=cyDlYZBK",
            year: 2024,
            genre: ["Фантастика", "Бойовик"],
            runtime: 120,
            director: "Енді Серкіс",
            actors: ["Том Харді", "Мішель Вільямс", "Вуді Харрельсон"],
            country: "США",
            plot: "Веном — один із найвідоміших антигероїв Marvel повертається на великі екрани. Том Харді знову виконує роль захисника Едді Брока, який є носієм іншопланетного симбіота."
        };
        
        setMovie(demoMovie);
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div className="loading">Завантаження...</div>;
    }

    if (!movie) {
        return <div className="error">Фільм не знайдено</div>;
    }

    return (
        <div className="movie-container">
            <div className="movie-content">
                <div className="movie-header">
                    <img src={movie.poster} alt={movie.title} className="movie-poster" />
                    <div className="movie-info">
                        <h1>{movie.title}</h1>
                        <div className="movie-details">
                            <p><strong>Жанр:</strong> {Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre}</p>
                            <p><strong>Рік:</strong> {movie.year}</p>
                            <p><strong>Тривалість:</strong> {movie.runtime} хв.</p>
                            <p><strong>Режисер:</strong> {movie.director}</p>
                            <p><strong>Країна:</strong> {movie.country}</p>
                            <p><strong>В ролях:</strong> {movie.actors.join(', ')}</p>
                        </div>
                        {movie.plot && (
                            <div className="movie-plot">
                                <h2>Опис</h2>
                                <p>{movie.plot}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

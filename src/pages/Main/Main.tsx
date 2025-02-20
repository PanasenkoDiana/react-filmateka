import { Link } from 'react-router-dom';
import { useRecentlyViewed } from '../../context/RecentlyViewedContext';
import { useMovies } from '../../hooks/useMovies';
import { MovieCard } from '../../shared/MovieCard/MovieCard';
import './Main.css';

export function Main() {
    const { movies } = useMovies();
    const { recentlyViewed } = useRecentlyViewed();

    // Сортируем фильмы по году выпуска для новинок (от самых новых)
    const sortedMoviesByYear = movies.sort((a, b) => b.releaseYear - a.releaseYear);
    const lastFiveMovies = sortedMoviesByYear.slice(0, 5); // Берем только последние 5 фильмов

    // Сортируем фильмы по рейтингу для топов (от самого высокого к низкому)
    const sortedMoviesByRating = movies
        .filter(movie => movie.rating) // Фильтруем фильмы без рейтинга
        .sort((a, b) => b.rating! - a.rating!); // Сортируем по рейтингу
    const topFiveMovies = sortedMoviesByRating.slice(0, 5); // Берем только топ 5 фильмов

    // Ограничиваем количество недавно просмотренных фильмов до 5
    const lastFiveViewed = recentlyViewed.slice(0, 5); // Берем только последние 5 фильмов

    // Собираем все жанры из недавно просмотренных фильмов
    const recentlyViewedGenres = new Set(
        lastFiveViewed.flatMap(movie => movie.genres.map(genre => genre.name)) // Получаем все жанры
    );

    // Рекомендуем фильмы, которые соответствуют хотя бы одному жанру из недавно просмотренных
    const recommendedMovies = movies
        .filter(movie =>
            movie.genres.some(genre => recentlyViewedGenres.has(genre.name)) // Проверяем, есть ли хотя бы один жанр
        )
        .slice(0, 5); // Ограничиваем количество рекомендаций до 5

    return (
        <div className="main-container">
            <main>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Filmateka</h1>
                        <p>Місце, де кіно оживає не лише на екрані, а й у твоїх спогадах, відгуках та вподобаннях.</p>
                        <Link to="/movies" className="start-button">Почнемо зараз!</Link>
                    </div>
                </section>

                <section className="movies-section">
                    <div className="section-header">
                        <h2>Новинки</h2>
                        <Link to="/movies" className="see-all">{'>'}</Link>
                    </div>
                    <div className="movies-grid">
                        {lastFiveMovies.map(movie => (
                            <MovieCard key={movie.id} {...movie} />
                        ))}
                    </div>
                </section>

                <section className="movies-section">
                    <div className="section-header">
                        <h2>У топах</h2>
                        <Link to="/top" className="see-all">{'>'}</Link>
                    </div>
                    <div className="movies-grid">
                        {topFiveMovies.map(movie => (
                            <MovieCard key={movie.id} {...movie} />
                        ))}
                    </div>
                </section>

                <section className="movies-section">
                    <div className="section-header">
                        <h2>Рекомендації</h2>
                        <Link to="/recommendations" className="see-all">{'>'}</Link>
                    </div>
                    <div className="movies-grid">
                        {recommendedMovies.map(movie => (
                            <MovieCard key={movie.id} {...movie} />
                        ))}
                    </div>
                </section>

                <section className="movies-section">
                    <div className="section-header">
                        <h2>Нещодавно переглянуті</h2>
                    </div>
                    <div className="movies-grid">
                        {lastFiveViewed.map(movie => (
                            <MovieCard key={movie.id} {...movie} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

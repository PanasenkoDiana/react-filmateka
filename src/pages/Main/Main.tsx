import { Link } from 'react-router-dom';
import { useRecentlyViewed } from '../../context/RecentlyViewedContext';
import { useMovies } from '../../hooks/useMovies';
import { MovieCard } from '../../shared/MovieCard/MovieCard';
import './Main.css';

export function Main() {
    const { movies } = useMovies();
    const { recentlyViewed } = useRecentlyViewed();

    const moviesArray = Array.isArray(movies) ? movies : [];

    const sortedMoviesByYear = [...moviesArray].sort((a, b) => b.releaseYear - a.releaseYear);
    const lastFiveMovies = sortedMoviesByYear.slice(0, 5);

    const sortedMoviesByRating = [...moviesArray]
    .filter(movie => typeof movie.rating === "number")
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    const topFiveMovies = sortedMoviesByRating.slice(0, 5);

    const lastFiveViewed = Array.isArray(recentlyViewed) ? recentlyViewed.slice(0, 5) : [];

    const recentlyViewedGenres = new Set(
        lastFiveViewed.flatMap(movie => movie.genres?.map(genre => genre.name) || [])
    );

    const recommendedMovies = moviesArray
        .filter(movie => movie.genres?.some(genre => recentlyViewedGenres.has(genre.name)))
        .slice(0, 5);
 
    console.log(movies)
    
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

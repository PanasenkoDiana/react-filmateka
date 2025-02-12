import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecentlyViewed } from '../../context/RecentlyViewedContext';
import type { IMovie } from '../../interfaces';
import { MovieCard } from '../../shared/MovieCard/MovieCard';
import './Main.css';

const demoMovies: IMovie[] = [
    {
        id: 1,
        title: "Веном",
        poster: "https://www.sonypictures.co.uk/sites/unitedkingdom/files/styles/max_n_x_365_/public/2024-10/2481_SP_VENOM_POSTER_1-Sheet_OutNow.jpg?itok=cyDlYZBK",
        year: 2024,
        genre: ["Фантастика", "Бойовик"],
        runtime: 112,
        director: "Енді Серкіс",
        actors: ["Том Харді", "Мішель Вільямс", "Вуді Харрельсон"],
        country: "США"
    },
    {
        id: 2,
        title: "Веном 2",
        poster: "https://www.sonypictures.co.uk/sites/unitedkingdom/files/styles/max_n_x_365_/public/2024-10/2481_SP_VENOM_POSTER_1-Sheet_OutNow.jpg?itok=cyDlYZBK",
        year: 2024,
        genre: ["Фантастика", "Бойовик"],
        runtime: 115,
        director: "Енді Серкіс",
        actors: ["Том Харді", "Мішель Вільямс", "Вуді Харрельсон"],
        country: "США"
    },
    {
        id: 3,
        title: "Веном 3",
        poster: "https://www.sonypictures.co.uk/sites/unitedkingdom/files/styles/max_n_x_365_/public/2024-10/2481_SP_VENOM_POSTER_1-Sheet_OutNow.jpg?itok=cyDlYZBK",
        year: 2024,
        genre: ["Фантастика", "Бойовик"],
        runtime: 112,
        director: "Енді Серкіс",
        actors: ["Том Харді", "Мішель Вільямс", "Вуді Харрельсон"],
        country: "США"
    },
    {
        id: 4,
        title: "Веном 4",
        poster: "https://www.sonypictures.co.uk/sites/unitedkingdom/files/styles/max_n_x_365_/public/2024-10/2481_SP_VENOM_POSTER_1-Sheet_OutNow.jpg?itok=cyDlYZBK",
        year: 2024,
        genre: ["Фантастика", "Бойовик"],
        runtime: 115,
        director: "Енді Серкіс",
        actors: ["Том Харді", "Мішель Вільямс", "Вуді Харрельсон"],
        country: "США"
    },
    {
        id: 5,
        title: "Веном 5",
        poster: "https://www.sonypictures.co.uk/sites/unitedkingdom/files/styles/max_n_x_365_/public/2024-10/2481_SP_VENOM_POSTER_1-Sheet_OutNow.jpg?itok=cyDlYZBK",
        year: 2024,
        genre: ["Фантастика", "Бойовик"],
        runtime: 112,
        director: "Енді Серкіс",
        actors: ["Том Харді", "Мішель Вільямс", "Вуді Харрельсон"],
        country: "США"
    }
];

export function Main() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const { recentlyViewed } = useRecentlyViewed();

    useEffect(() => {
        setMovies(demoMovies);
    }, []);

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
                        {movies.map(movie => (
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
                        {movies.map(movie => (
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
                        {movies.map(movie => (
                            <MovieCard key={movie.id} {...movie} />
                        ))}
                    </div>
                </section>

                <section className="movies-section">
                    <div className="section-header">
                        <h2>Нещодавно переглянуті</h2>
                    </div>
                    <div className="movies-grid">
                        {recentlyViewed.map(movie => (
                            <MovieCard key={movie.id} {...movie} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

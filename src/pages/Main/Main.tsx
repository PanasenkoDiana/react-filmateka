import './Main.css';
import { useRecentlyViewed } from '../../context/RecentlyViewedContext';
import { IMovie } from '../../shared/types/types'; 

export function Main() {
    const recentlyViewed = useRecentlyViewed();

    return (
        <div id="page">
            <div id="banner">
                <h1 className="banner-title">Filmateka</h1>
                <p className="banner-text">Місце, де кіно оживає не лише на екрані, а й у твоїх спогадах, відгуках та вподобаннях.</p>
                <button className="banner-button">Почнемо зараз!</button>
            </div>

            {["Новинки", "У топах", "Рекомендації"].map((category, index) => (
                <div key={index} className="category">
                    <h2 className="category-title">{category} ➤</h2>
                    <div className="movies-container">
                        {Array(5).fill(0).map((_, i) => (
                            <img key={i} className="movie-poster" src="https://www.sonypictures.co.uk/sites/unitedkingdom/files/styles/max_n_x_365_/public/2024-10/2481_SP_VENOM_POSTER_1-Sheet_OutNow.jpg?itok=cyDlYZBK" alt="Веном: Останній танець" />
                        ))}
                    </div>
                </div>
            ))}

            <div className="category">
                <h2 className="category-title">Нещодавно переглянуті ➤</h2>
                <div className="films-container">
                    {recentlyViewed.length > 0 ? (
                        recentlyViewed.map((movie: IMovie) => (
                            <img key={movie.id} className="movie-poster" src={movie.poster || undefined} alt={movie.title} />
                        ))
                    ) : (
                        <p className="empty-text">Поки що немає переглянутих фільмів</p>
                    )}
                </div>
            </div>
        </div>
    );
}

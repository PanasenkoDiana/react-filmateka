import './Main.css';
import { useRecentlyViewed } from '../../context/RecentlyViewedContext';

// interface i

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
                    <div className="films-container">
                        {Array(6).fill(0).map((_, i) => (
                            <img key={i} className="film-poster" src="https://www.sonypictures.co.uk/sites/unitedkingdom/files/styles/max_n_x_365_/public/2024-10/2481_SP_VENOM_POSTER_1-Sheet_OutNow.jpg?itok=cyDlYZBK" alt="Веном: Останній танець" />
                        ))}
                    </div>
                </div>
            ))}

            <div className="category">
                <h2 className="category-title">Нещодавно переглянуті ➤</h2>
                <div className="films-container">
                    {recentlyViewed.length > 0 ? (
                        recentlyViewed.map((film) => (
                            <img key={film.id} className="film-poster" src={film.film.posterUrl} alt={film.film.title} />
                        ))
                    ) : (
                        <p className="empty-text">Поки що немає переглянутих фільмів</p>
                    )}
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import './MoviesPage.css';

const MoviesPage: React.FC = () => {
  return (
    <div className="movies-page">
      <nav className="navbar">
        <div className="logo">FILMATEKA</div>
        <ul className="menu">
          <li><a href="#">Сортувати</a></li>
          <li><a href="#">Популярні</a></li>
          <li><a href="#">Новинки</a></li>
          <li><a href="#">За рейтингом</a></li>
        </ul>
      </nav>
      <div className="movies-grid">
        
        <div className="movie-card">
          <img src="path/to/venom-poster.jpg" alt="Venom" />
          <div className="movie-info">
            <h3>Venom</h3>
            <p>Жанр: Екшн</p>
            <p>Рік: 2018</p>
            <p>Рейтинг: 7.5</p>
          </div>
        </div>
        {/* Диан,дублируй столько карточек,сколько необходимо */}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>Контакти: support@filmoteka.net</p>
          <p>Соціальні мережі: [посилання]</p>
          <p><a href="#">Умови використання</a> | <a href="#">Політика конфіденційності</a></p>
        </div>
      </footer>
    </div>
  );
};

export default MoviesPage;

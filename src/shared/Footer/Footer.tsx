import './Footer.css';

export function Footer() {
    return (
        <div className="footer">
            <footer className="footer-container">
                <div className="footer-section">
                    <h4>Користування картою</h4>
                    <ul>
                        <li><a href="#">Програма лояльності</a></li>
                        <li><a href="#">Гайдлайни</a></li>
                        <li><a href="#">Мобільні пристрої</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Про нас</h4>
                    <ul>
                        <li><a href="#">Користувацька угода</a></li>
                        <li><a href="#">Політика конфіденційності</a></li>
                        <li><a href="#">Підписка для закладів</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Сервіси</h4>
                    <ul>
                        <li><a href="#">Додати подкаст</a></li>
                        <li><a href="#">Інструкції FILMATEKA</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Партнерам FILMATEKA</h4>
                    <ul>
                        <li><a href="#">Навчання</a></li>
                        <li><a href="#">Партнерство</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Наші додатки</h4>
                    <ul>
                        <li><a href="#">Smart TV</a></li>
                        <li><a href="#">App Store</a></li>
                        <li><a href="#">Google Play</a></li>
                        <li><a href="#">AppGallery</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <p>support@filmoteka.net</p>
                </div>
            </footer>
        </div>
    );
}

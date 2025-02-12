import './Header.css'
import { Link } from 'react-router-dom';

export function Header(){
    return (
        <div id="header">
            <div className="account">
                <img src="img/account.png" alt="account" />
                <p>User</p>
            </div>
            <div className='search-and-main'>
                <p>Filmateka</p>
                <div className="search-bar">
                    <img className='camera-img' src="/img/camera.png" alt="camera" />
                    <img src="/img/keyboard.png" alt="keyboard" />
                </div>
                <Link to="/movies">Усі фільми</Link>
                <div className="search-box">
                    <input type="text" placeholder="Швидкий пошук" />
                </div>
                <Link to="/auth" className="auth-button">Увійти</Link>
            </div>

        </div>
    )
}
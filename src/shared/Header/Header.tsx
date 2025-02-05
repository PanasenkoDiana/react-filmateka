import { Link } from 'react-router-dom'
import './Header.css'

export function Header(){
    return (
        <div id="header">
            {/* <div className="account">
                <img src="img/account.png" alt="account" />
                <p>User</p>
            </div>
            <div className='search-and-main'>
                <p>Filmateka</p>
                <div className="search-bar">
                    <img className='camera-img' src="/img/camera.png" alt="camera" />
                    <img src="/img/keyboard.png" alt="keyboard" />
                </div>
            </div> */}
            <div className="LogoAndNavigationHeader">
                <div className="LogoContainer">
                    <img src="../../../public/img/logo.jpg" alt="" />
                    <p>FILMATEKA</p>
                </div>
                <div className="NavigationHeader">
                    <Link to='/'>
                        <p>Головна</p>
                    </Link>
                    <Link to='movies'>
                        <p>Усі фільми</p>
                    </Link>
                </div>
            </div>
            <div className="SearchBarAndAccountHeader">
                <div className="SearchBar">
                    <img src="../../../public/img/search.jpg" alt="search" />
                    <input type="text" placeholder="Швидкий пошук" />
                </div>
                <button className="AuthButtonHeader">Увійти</button>
            </div>
        </div>
    )
}
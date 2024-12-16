import './Header.css'

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
            </div>

        </div>
    )
}
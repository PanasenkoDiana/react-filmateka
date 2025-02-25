import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import { UserContext } from '../../context/UserContext'


export function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { addToken } = useContext(UserContext)

    async function submitAuth(e: React.FormEvent){
        e.preventDefault();
        console.log('Login attempt with:', { email, password });
        const response = await fetch('http://localhost:8000/api/user/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),

        })
        
        const result = await response.json()
        
        if (result.status === 'error'){
            alert('Login attempt failed')
        }
        else {
            addToken(result)
            // localStorage.setItem('token', result.data);
            // window.location.href = '/';
        }
    }

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('Login attempt with:', { email, password });
    //     const auth = fetch('http://localhost:8000/api/user/auth/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email,
    //             password,
    //         }),
    //     })

    //     const result = 

    //     if (auth.status === 'error')
    // };

    // async function authFunc(){
    //     const auth = fetch('http://localhost:8000/api/user/auth/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email,
    //             password,
    //         }),
    //     })
    // }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Авторизація</h2>
                <form onSubmit={submitAuth}>
                    <input
                        type="text"
                        placeholder="Пошта або телефон"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Авторизувати</button>
                </form>
                <div className="auth-links">
                    <span>Авторизація</span>
                    <span> | </span>
                    <Link to="/register">Реєстрація</Link>
                </div>
            </div>
        </div>
    );
}

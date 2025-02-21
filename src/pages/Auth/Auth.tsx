import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt with:', { email, password });
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Авторизація</h2>
                <form onSubmit={handleSubmit}>
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

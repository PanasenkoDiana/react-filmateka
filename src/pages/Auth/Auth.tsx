import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { UserContext } from '../../context/UserContext'


export function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!email || !password) {
            setError("Пошта і пароль обов'язкові");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch("http://localhost:8000/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Помилка авторизації");
            }


            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);

            console.log("Авторизація успішна:", data);
            navigate("/"); 
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Авторизація</h2>
                {error && <p className="error-message">{error}</p>}
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
                    <button type="submit" disabled={loading}>
                        {loading ? "Авторизуюсь..." : "Авторизувати"}
                    </button>
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

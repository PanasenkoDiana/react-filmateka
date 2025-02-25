import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registration attempt with:', formData);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Реєстрація</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Ім'я"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Прізвище"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Пошта"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Повторення паролю"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <button type="submit">Зареєструватися</button>
                </form>
                <div className="auth-links">
                    <Link to="/login">Авторизація</Link>
                    <span> | </span>
                    <span>Реєстрація</span>
                </div>
            </div>
        </div>
    );
}

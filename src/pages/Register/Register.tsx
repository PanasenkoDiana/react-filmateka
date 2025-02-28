import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileImage: "",
        age: "",
    });

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (formData.password !== formData.confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError("Некорректный email");
            return;
        }

        if (!formData.username || !formData.age) {
            setError("Имя пользователя и возраст обязательны");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch("http://localhost:8000/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    profileImage: formData.profileImage,
                    age: formData.age,
                    role: "USER",
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Ошибка регистрации");
            }

            console.log("Регистрация успешна:", data);
            navigate("/login");
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Реєстрація</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Имя пользователя" value={formData.username} onChange={handleChange} required />
                    <input type="number" name="age" placeholder="Возраст" value={formData.age} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Пошта" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Пароль" value={formData.password} onChange={handleChange} required />
                    <input type="password" name="confirmPassword" placeholder="Повторення паролю" value={formData.confirmPassword} onChange={handleChange} required />

                    <button type="submit" disabled={loading}>{loading ? "Регистрация..." : "Зареєструватися"}</button>
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

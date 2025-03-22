import { useState, useEffect } from 'react';
import { IUser } from '../../../../shared/types/types';
import './UserModal.css';

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (userData: Omit<IUser, 'id'>) => Promise<{ success: boolean; error?: string }>;
    user: IUser | null;
}

export function UserModal({ isOpen, onClose, onSubmit, user }: UserModalProps) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        profileImage: '',
        age: '',
        role: 'USER' as 'USER' | 'ADMIN'
    });

    useEffect(() => {
        if (user) {
            setFormData({
                username: user.username,
                email: user.email,
                password: '',
                profileImage: user.profileImage || '',
                age: user.age,
                role: user.role
            });
        } else {
            setFormData({
                username: '',
                email: '',
                password: '',
                profileImage: '',
                age: '',
                role: 'USER'
            });
        }
    }, [user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await onSubmit(formData);
        if (result.success) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <h2>{user ? 'Редагувати користувача' : 'Створити нового користувача'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <input
                            type="text"
                            placeholder="Ім'я користувача"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <input
                            type="email"
                            placeholder="Пошта"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <input
                            type="password"
                            placeholder="Пароль"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required={!user}
                        />
                    </div>
                    <div className="formGroup">
                        <input
                            type="text"
                            placeholder="URL фото профілю"
                            value={formData.profileImage}
                            onChange={(e) => setFormData({ ...formData, profileImage: e.target.value })}
                        />
                    </div>
                    <div className="formGroup">
                        <input
                            type="text"
                            placeholder="Вік"
                            value={formData.age}
                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <div className="radioGroup">
                            <input
                                type="radio"
                                id="userRole"
                                name="role"
                                value="USER"
                                checked={formData.role === 'USER'}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value as 'USER' | 'ADMIN' })}
                            />
                            <label htmlFor="userRole">Користувач</label>
                            <input
                                type="radio"
                                id="adminRole"
                                name="role"
                                value="ADMIN"
                                checked={formData.role === 'ADMIN'}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value as 'USER' | 'ADMIN' })}
                            />
                            <label htmlFor="adminRole">Адмін</label>
                        </div>
                    </div>
                    <div className="modalButtons">
                        <button type="submit">{user ? 'Зберегти' : 'Створити'}</button>
                        <button type="button" onClick={onClose}>Скасувати</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
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
                        <label>Ім'я користувача:</label>
                        <input
                            type="text"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label>Пароль:</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required={!user}
                        />
                    </div>
                    <div className="formGroup">
                        <label>URL фото профілю:</label>
                        <input
                            type="text"
                            value={formData.profileImage}
                            onChange={(e) => setFormData({ ...formData, profileImage: e.target.value })}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Вік:</label>
                        <input
                            type="text"
                            value={formData.age}
                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label>Роль:</label>
                        <select
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value as 'USER' | 'ADMIN' })}
                        >
                            <option value="USER">Користувач</option>
                            <option value="ADMIN">Адміністратор</option>
                        </select>
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
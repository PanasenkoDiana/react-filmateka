import { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '../shared/types/types';

export function useUsers() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
            setIsLoading(false);
        } catch (err) {
            setError('Error fetching users');
            setIsLoading(false);
        }
    };

    const createUser = async (userData: Omit<IUser, 'id'>) => {
        try {
            const response = await axios.post('/api/users', userData);
            setUsers([...users, response.data]);
            return { success: true };
        } catch (err) {
            setError('Error creating user');
            return { success: false, error: 'Failed to create user' };
        }
    };

    const updateUser = async (id: string, userData: Partial<IUser>) => {
        try {
            const response = await axios.put(`/api/users/${id}`, userData);
            setUsers(users.map(user => user.id === id ? response.data : user));
            return { success: true };
        } catch (err) {
            setError('Error updating user');
            return { success: false, error: 'Failed to update user' };
        }
    };

    const deleteUser = async (id: string) => {
        try {
            await axios.delete(`/api/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
            return { success: true };
        } catch (err) {
            setError('Error deleting user');
            return { success: false, error: 'Failed to delete user' };
        }
    };

    return {
        users,
        isLoading,
        error,
        isModalOpen,
        setIsModalOpen,
        selectedUser,
        setSelectedUser,
        createUser,
        updateUser,
        deleteUser
    };
}
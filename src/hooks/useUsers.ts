import { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '../shared/types/types';
import { ApiResponse } from '../shared/types/api.types';
import { UseUsersReturn } from '../shared/types/hooks.types';


axios.defaults.baseURL = 'http://localhost:8000';

export function useUsers(): UseUsersReturn {
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
            const response = await axios.get<ApiResponse<IUser[]>>('/api/users');
            if (response.data.status === 'success' && response.data.data) {
                setUsers(response.data.data);
                setIsLoading(false);
            } else {
                throw new Error(response.data.message || 'Failed to fetch users');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to fetch users';
            setError(errorMessage);
            setIsLoading(false);
        }
    };

    const createUser = async (userData: Omit<IUser, 'id'>) => {
        try {
            const response = await axios.post<ApiResponse<IUser>>('/api/users', userData);
            if (response.data.status === 'success' && response.data.data) {
                const newUser = response.data.data;
                setUsers(prevUsers => [...prevUsers, newUser]);
                return { success: true };
            } else {
                throw new Error(response.data.message || 'Failed to create user');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to create user';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        }
    };

    const updateUser = async (userData: Omit<IUser, 'id'>) => {
        if (!selectedUser) return { success: false, error: 'No user selected' };
        try {
            const response = await axios.put<ApiResponse<IUser>>(`/api/users/${selectedUser.id}`, userData);
            if (response.data.status === 'success' && response.data.data) {
                setUsers(prevUsers => prevUsers.map(user => 
                    user.id === selectedUser.id && response.data.data ? response.data.data : user
                ));
                return { success: true };
            } else {
                throw new Error(response.data.message || 'Failed to update user');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to update user';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        }
    };

    const deleteUser = async (id: number) => {
        try {
            const response = await axios.delete<ApiResponse<void>>(`/api/users/${id}`);
            if (response.data.status === 'success') {
                setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
                return { success: true };
            } else {
                throw new Error(response.data.message || 'Failed to delete user');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to delete user';
            setError(errorMessage);
            return { success: false, error: errorMessage };
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
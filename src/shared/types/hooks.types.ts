import { IUser } from './types';

export interface UseUsersReturn {
    users: IUser[];
    isLoading: boolean;
    error: string | null;
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    selectedUser: IUser | null;
    setSelectedUser: (user: IUser | null) => void;
    createUser: (userData: Omit<IUser, 'id'>) => Promise<{ success: boolean; error?: string }>;
    updateUser: (userData: Omit<IUser, 'id'>) => Promise<{ success: boolean; error?: string }>;
    deleteUser: (id: number) => Promise<{ success: boolean; error?: string }>;
}
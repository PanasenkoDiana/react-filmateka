import { useUsers } from '../../../../hooks/useUsers';
import { UserModal } from './UserModal';
import { IUser } from '../../../../shared/types/types';
import './Users.css';

export function Users() {
    const {
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
    } = useUsers();

    return (
        <div className="usersContainer">
            <div className="usersHeader">
                <h2>Користувачі</h2>
                <button 
                    className="addButton" 
                    onClick={() => {
                        setSelectedUser(null);
                        setIsModalOpen(true);
                    }}
                >
                    Додати нового користувача
                </button>
            </div>

            {isLoading ? (
                <div className="loading">Завантаження...</div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                <div className="usersGrid">
                    {users.map((user) => (
                        <div className="userCard" key={user.id}>
                            <div className="userImage">
                                <img src={user.profileImage || '/img/account.png'} alt="user photo" />
                            </div>
                            <div className="userInfo">
                                <h3>{user.username}</h3>
                                <p>{user.email}</p>
                                <p>Вік: {user.age}</p>
                                <p>Роль: {user.role}</p>
                            </div>
                            <div className="userActions">
                                <button 
                                    className="editButton"
                                    onClick={() => {
                                        setSelectedUser(user);
                                        setIsModalOpen(true);
                                    }}
                                >
                                    Редагувати
                                </button>
                                <button 
                                    className="deleteButton"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Видалити
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <UserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={selectedUser ? updateUser : createUser}
                user={selectedUser}
            />
        </div>
    );
}
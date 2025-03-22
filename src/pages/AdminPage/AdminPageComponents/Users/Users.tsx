import { useUsers } from "../../../../hooks/useUsers";
import { IUser } from "../../../../shared/types/types";
import "./Users.css";
import "./UsersModal.css";

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
    } = useUsers()

    return (
        <div className="usersDiv">
            <div className="createUser">
                <button onClick={() => {
                    setSelectedUser(null);
                    setIsModalOpen(true);
                }}>Додати нового Користувача</button>
            </div>
            {isLoading === false ? (
                !error ? (
                    <div className="allUsers">
                        {users.map((user) => (
                            <div className="userCard" key={user.id}>
                                <div className="userInfo">
                                    <img src={user.profileImage || ''} alt="user photo" />
                                    <div className="textDiv">
                                        <p>{user.username}</p>
                                        <p>{user.email}</p>
                                        <p>Age: {user.age}</p>
                                        <p>Role: {user.role}</p>
                                    </div>
                                </div>
                                <div className="userCardButtons">
                                    <button onClick={() => {
                                        setSelectedUser(user);
                                        setIsModalOpen(true);
                                    }}>Змінити</button>
                                    <button onClick={() => deleteUser(user.id)}>Видалити</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>{error}</div>
                )
            ) : (
                <div>loading</div>
            )}

            {isModalOpen && (
                <div className="modalOverlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <button className="closeButton" onClick={() => setIsModalOpen(false)}>✖</button>
                        <h2>{selectedUser ? "Змінити Користувача" : "Створити Користувача"}</h2>
                        <input
                            type="text"
                            placeholder="Ім'я користувача"
                            value={selectedUser?.username || ''}
                            onChange={(e) => setSelectedUser(prev => ({ ...prev, username: e.target.value } as IUser))}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={selectedUser?.email || ''}
                            onChange={(e) => setSelectedUser(prev => ({ ...prev, email: e.target.value } as IUser))}
                        />
                        <input
                            type="number"
                            placeholder="Вік"
                            value={selectedUser?.age || ''}
                            onChange={(e) => setSelectedUser(prev => ({ ...prev, age: parseInt(e.target.value) } as IUser))}
                        />
                        <select
                            value={selectedUser?.role || 'USER'}
                            onChange={(e) => setSelectedUser(prev => ({ ...prev, role: e.target.value } as IUser))}
                        >
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                        <button
                            className="createButton"
                            onClick={() => selectedUser?.id ? updateUser(selectedUser) : createUser(selectedUser as IUser)}
                        >
                            {selectedUser ? "Змінити" : "Створити"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
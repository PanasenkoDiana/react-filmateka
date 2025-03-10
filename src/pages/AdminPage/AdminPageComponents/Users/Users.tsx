import { useUsers } from "../../../../hooks/useUsers";
import { IUser } from "../../../../shared/types/types";
import "./Users.css"


export function Users(){

    const {users, isLoading, error} = useUsers()

    return (
        <div className="usersDiv">
            <div className="createUser">
                <button>Додати нового Користувача</button>
            </div>
            { isLoading === false ? !error ? (
                <div className="allUsers">
                    {users.map((user)=>{
                        return (
                            <div className="userCard">
                                <div className="userInfo">
                                    <img src='' alt="user photo" />
                                    <div className="textDiv">
                                        <p>{user.name}</p>
                                    </div>
                                </div>
                                <div className="userCardButtons">
                                    <button>Змінити</button>
                                    <button>Видалити</button>
                                </div>
                            </div>
                        )
                    })}
                </div>) : (<div>{error}</div>) : (<div>loading</div>)
            }
        </div>
    )
}
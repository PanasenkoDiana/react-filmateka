import { useState } from "react"
import { Users } from "./AdminPageComponents/Users/Users"
import { useUsers } from "../../hooks/useUsers"
import { Persons } from "./AdminPageComponents/Persons/Persons"
import { Movies } from "./AdminPageComponents/Movies/Movies"
import "./AdminPage.css"
import { Genres } from "./AdminPageComponents/Genres/Genres"




export function AdminPage(){

    const [selectedOption, setSelectedOption] = useState('Users')

    const {users, isLoading:isUserLoading, error:userError} = useUsers()

    function selectOption(select: string){
        setSelectedOption(select)
    }

    return (
        <div className="adminPage">
            <div className="adminPageNav">
                <button onClick={()=>{selectOption('Users')}} className={`NavigationButton ${selectedOption === "Users" ? "Selected" : ''}`}>Коритувачі</button>
                <button onClick={()=>{selectOption('Persons')}} className={`NavigationButton ${selectedOption === "Persons" ? "Selected" : ''}`}>Актори</button>
                <button onClick={()=>{selectOption('Movies')}} className={`NavigationButton ${selectedOption === "Movies" ? "Selected" : ''}`}>Фільми</button>
                <button onClick={()=>{selectOption('Genres')}} className={`NavigationButton ${selectedOption === "Genres" ? "Selected" : ''}`}>Жанри</button>
            </div>
            <div className="AdminPageContent">
                {selectedOption === 'Users' && <Users></Users>}
                {selectedOption === 'Persons' && <Persons></Persons>}
                {selectedOption === 'Movies' && <Movies></Movies>}
                {selectedOption === 'Genres' && <Genres></Genres>}
            </div> 
        </div>
    )
}
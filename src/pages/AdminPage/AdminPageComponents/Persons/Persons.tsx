import { usePersons } from "../../../../hooks/usePersons"
import "./Persons.css"

export function Persons(){

    const {persons, isLoading, error} = usePersons()

    return (
        <div className="personsDiv">
            <div className="createPerson">
                <button>Додати нового актора</button>
            </div>
            { isLoading === false ? !error ? ( 
                <div className="allPersons">
                    {persons.map((person)=>{
                        return (
                            <div className="personCard">
                                <div className="personInfo">
                                    <img src={person.photo} alt="person photo" />
                                        <div className="textDiv">
                                            <p>{person.name}<br />{person.surname}</p>
                                        </div>
                                    </div>
                                <div className="personCardButtons">
                                    <button>Змінити</button>
                                    <button>Видалити</button>
                                </div>
                            </div>
                        )
                    })}
                </div> ) : (<div>{error}</div>) : (<div>loading</div>)
            }    
        </div>
    )
}
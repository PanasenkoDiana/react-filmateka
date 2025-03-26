import { useState } from "react";
import { usePersons } from "../../../../hooks/usePersons"
import "./Persons.css"
import "./PersonsModal.css"
import { ImageUploadInput } from "../../../../shared/ImageUploadInput/ImageUploadInput";


export function Persons(){

    const {persons, isLoading, error, refetch} = usePersons()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [personName, setPersonName] = useState("")
    const [personSurname, setPersonSurname] = useState("")
    const [personPhoto, setPersonPhoto] = useState("")
    const [personDescription, setPersonDescription] = useState("")
    const [editingPersonId, setEditingPersonId] = useState<number | null>(null);


    const handleFileSelect = (file: string) => {
        setPersonPhoto(`http://localhost:8000${file}`)
    };



    const handleDeletePerson = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/api/persons/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch();
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error deleting person:", error);
            alert("Не вдалося видалити персону");
        }
    };


    const handleCreatePerson = async () => {
        if (!personName) {
            alert("Будь ласка, заповніть ім\'я персони");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/api/persons", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: personName,
                    surname: personSurname || "",
                    photo: personPhoto || "",
                    description: personDescription || "",
                }),
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch();
                setIsModalOpen(false);
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error creating person:", error);
            alert("Не вдалося створити персону");
        }
    };

    const handleUpdatePerson = async () => {
        if (!personName || !editingPersonId) {
            alert("Будь ласка, заповніть назву персони");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/persons/${editingPersonId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: personName,
                    surname: personSurname || "",
                    photo: personPhoto || "",
                    description: personDescription || "",
                }),
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch();
                setIsModalOpen(false);
                setEditingPersonId(null);
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error updating person:", error);
            alert("Не вдалося змінити персону");
        }
    };

    const handleEditClick = (person: any) => {
        setPersonName(person.name);
        setPersonSurname(person.surname || "");
        setPersonPhoto(person.photo || "");
        setPersonDescription(person.description || "");
        setEditingPersonId(person.id);
        setIsModalOpen(true);
    };



    return (
        <div className="personsDiv">
            <div className="createPerson">
                <button onClick={() => setIsModalOpen(true)}>Додати нового актора</button>
            </div>
            { isLoading === false ? !error ? ( 
                <div className="allPersons">
                    {persons.map((person)=>{
                        return (
                            <div className="personCard">
                                <div className="personInfo">
                                    <img src={person.photo} alt="person photo" />
                                        <div className="textDiv">
                                            <p className="personName">{person.name}</p>
                                            <p className="personSurname">{person.surname}</p>
                                        </div>
                                    </div>
                                <div className="personCardButtons">
                                    <button onClick={() => handleEditClick(person)}>Змінити</button>
                                    <button onClick={() => handleDeletePerson(person.id)}>Видалити</button>
                                </div>
                            </div>
                        )
                    })}
                </div> ) : (<div>{error}</div>) : (<div>loading</div>)
            }    

            { isModalOpen && (
                <div className="modalOverlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modalContent" onClick={(e)=> e.stopPropagation()}>
                        <button className="closeButton" onClick={() => setIsModalOpen(false)}>✖</button>
                        <h2>{editingPersonId ? "Змінити Персону" : "Створити Персону"}</h2>
                        <input
                            type="text"
                            placeholder="Назва персони"
                            value={personName}
                            onChange={(e) => setPersonName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Фамилия персони (Не обов'язково)"
                            value={personSurname}
                            onChange={(e) => setPersonSurname(e.target.value)}
                        />

                        <div className="personImageDiv">
                            <h2>Фото користувача</h2>
                            <div className="personImage">
                                {personPhoto ? 
                                <img src={`http://localhost:8000${personPhoto}`} alt="" /> :
                                // <img src={`${personPhoto}`} alt="" /> :
                                undefined }


                                
                                <ImageUploadInput onFileSelect={handleFileSelect}></ImageUploadInput>
                            </div>
                        </div>

                        <textarea
                            placeholder="Опис (Не обов'язково)"
                            value={personDescription}
                            onChange={(e) => setPersonDescription(e.target.value)}
                        />

                        <button
                            className="createButton"
                            onClick={editingPersonId ? handleUpdatePerson : handleCreatePerson}
                        >
                            {editingPersonId ? "Змінити" : "Створити"}
                        </button>
                    </div>
                </div>
            ) }
        </div>
    )
}
import { useState } from "react";
import { useGenres } from "../../../../hooks/useGenres";
import "./Genres.css";
import "./GenresModal.css";

export function Genres() {
    const { genres, isLoading, error, refetch } = useGenres();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [genreName, setGenreName] = useState("");
    const [genreDescription, setGenreDescription] = useState("");
    const [editingGenreId, setEditingGenreId] = useState<number | null>(null);

    const handleDeleteGenre = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/api/genres/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch();
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error deleting genre:", error);
            alert("Не вдалося видалити жанр");
        }
    };

    const handleCreateGenre = async () => {
        if (!genreName) {
            alert("Будь ласка, заповніть назву жанру");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/api/genres", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: genreName,
                    description: genreDescription || "",
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
            console.error("Error creating genre:", error);
            alert("Не вдалося створити жанр");
        }
    };

    const handleUpdateGenre = async () => {
        if (!genreName || !editingGenreId) {
            alert("Будь ласка, заповніть назву жанру");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/genres/${editingGenreId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: genreName,
                    description: genreDescription || "",
                }),
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch();
                setIsModalOpen(false);
                setEditingGenreId(null);
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error updating genre:", error);
            alert("Не вдалося змінити жанр");
        }
    };

    const handleEditClick = (genre: any) => {
        setGenreName(genre.name);
        setGenreDescription(genre.description || "");
        setEditingGenreId(genre.id);
        setIsModalOpen(true);
    };

    return (
        <div className="genresDiv">
            <div className="createGenre">
                <button onClick={() => setIsModalOpen(true)}>Додати новий жанр</button>
            </div>

            {isLoading === false ? (
                !error ? (
                    <div className="allGenres">
                        {genres.map((genre) => (
                            <div className="genreCard" key={genre.id}>
                                <div className="GenreInfo">
                                    <p>{genre.name}</p>
                                </div>
                                <div className="genreCardButtons">
                                    <button onClick={() => handleEditClick(genre)}>Змінити</button>
                                    <button onClick={() => handleDeleteGenre(genre.id)}>Видалити</button>
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
                        <h2>{editingGenreId ? "Змінити Жанр" : "Створити Жанр"}</h2>
                        <input
                            type="text"
                            placeholder="Назва жанру"
                            value={genreName}
                            onChange={(e) => setGenreName(e.target.value)}
                        />
                        <textarea
                            placeholder="Опис (Не обов'язково)"
                            value={genreDescription}
                            onChange={(e) => setGenreDescription(e.target.value)}
                        />
                        <button
                            className="createButton"
                            onClick={editingGenreId ? handleUpdateGenre : handleCreateGenre}
                        >
                            {editingGenreId ? "Змінити" : "Створити"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

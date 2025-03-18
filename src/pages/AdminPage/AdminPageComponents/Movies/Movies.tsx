import { useState } from "react";
import { useMovies } from "../../../../hooks/useMovies";
import "./Movies.css";
import "./MoviesModal.css";

export function Movies() {
    const { movies, isLoading, error, refetch } = useMovies();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movieTitle, setMovieTitle] = useState("");
    const [releaseYear, setReleaseYear] = useState<number | "">("");
    const [posterUrl, setPosterUrl] = useState("");
    const [editingMovieId, setEditingMovieId] = useState<number | null>(null);

    const handleDeleteMovie = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/api/movies/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch();
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error deleting movie:", error);
            alert("Не вдалося видалити фільм");
        }
    };

    const handleCreateMovie = async () => {
        if (!movieTitle || !releaseYear) {
            alert("Будь ласка, заповніть усі поля");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/api/movies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: movieTitle,
                    releaseYear: Number(releaseYear),
                    posterUrl,
                }),
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch();
                setIsModalOpen(false);
                resetForm();
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error creating movie:", error);
            alert("Не вдалося створити фільм");
        }
    };

    const handleUpdateMovie = async () => {
        if (!movieTitle || !releaseYear || !editingMovieId) {
            alert("Будь ласка, заповніть усі поля");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/movies/${editingMovieId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: movieTitle,
                    releaseYear: Number(releaseYear),
                    posterUrl,
                }),
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch();
                setIsModalOpen(false);
                resetForm();
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error updating movie:", error);
            alert("Не вдалося змінити фільм");
        }
    };

    const handleEditClick = (movie: any) => {
        setMovieTitle(movie.title);
        setReleaseYear(movie.releaseYear);
        setPosterUrl(movie.posterUrl || "");
        setEditingMovieId(movie.id);
        setIsModalOpen(true);
    };

    const resetForm = () => {
        setMovieTitle("");
        setReleaseYear("");
        setPosterUrl("");
        setEditingMovieId(null);
    };

    return (
        <div className="moviesDiv">
            <div className="createMovie">
                <button onClick={() => setIsModalOpen(true)}>Додати новий фільм</button>
            </div>

            {!isLoading ? (
                !error ? (
                    <div className="allMovies">
                        {movies.map((movie) => (
                            <div className="moviesCard" key={movie.id}>
                                <div className="movieInfo">
                                    <img src={movie.poster} alt="film image" />
                                    <p className="movieTitle">{movie.title}</p>
                                    <div className="additionalMovieInfo">
                                        <p>{movie.releaseYear}</p>
                                    </div>
                                </div>
                                <div className="movieCardButtons">
                                    <button onClick={() => handleEditClick(movie)}>Змінити</button>
                                    <button onClick={() => handleDeleteMovie(movie.id)}>Видалити</button>
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
                <div className="modalOverlay" onClick={() => { setIsModalOpen(false); resetForm(); }}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <button className="closeButton" onClick={() => { setIsModalOpen(false); resetForm(); }}>✖</button>
                        <h2>{editingMovieId ? "Змінити Фільм" : "Створити Фільм"}</h2>
                        <input
                            type="text"
                            placeholder="Назва фільму"
                            value={movieTitle}
                            onChange={(e) => setMovieTitle(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Рік виходу"
                            value={releaseYear}
                            onChange={(e) => setReleaseYear(e.target.value === "" ? "" : Number(e.target.value))}
                        />
                        <input
                            type="text"
                            placeholder="URL постера"
                            value={posterUrl}
                            onChange={(e) => setPosterUrl(e.target.value)}
                        />
                        <button
                            className="createButton"
                            onClick={editingMovieId ? handleUpdateMovie : handleCreateMovie}
                        >
                            {editingMovieId ? "Змінити" : "Створити"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

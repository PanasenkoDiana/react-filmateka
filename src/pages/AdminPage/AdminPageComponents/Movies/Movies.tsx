import { useState } from "react";
import { useMovies } from "../../../../hooks/useMovies";
import "./Movies.css";
import "./MoviesModal.css";
import { useGenres } from "../../../../hooks/useGenres";
import { IGenre, IPerson } from "../../../../shared/types/types";
import { usePersons } from "../../../../hooks/usePersons";
import { ElementFlags } from "typescript";

export function Movies() {
    const { movies, isLoading, error, refetch } = useMovies();
    const { genres: allGenres, isLoading: genresIsLoading, error: genresError } = useGenres();
    const { persons: allPersons, isLoading: personsIsLoading, error: personsError } = usePersons();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movieTitle, setMovieTitle] = useState("");
    const [releaseYear, setReleaseYear] = useState<number | "">("");
    const [mainLanguage, setMainLanguage] = useState("");
    const [productionCountry, setProductionCountry] = useState("");
    const [ageRating, setAgeRating] = useState("");
    const [runtime, setRuntime] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [interestingFacts, setInterestingFacts] = useState("");
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [persons, setPersons] = useState<IPerson[]>([]);
    const [posterUrl, setPosterUrl] = useState("");
    const [editingMovieId, setEditingMovieId] = useState<number | null>(null);
    const [filteredPerson, setFilteredPerson] = useState<IPerson[]>([]);

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
        if (!movieTitle || !releaseYear || !mainLanguage || !productionCountry || !productionCountry || !ageRating || !runtime) {
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
                    mainLanguage: mainLanguage,
                    productionCountry: productionCountry,
                    ageRating: ageRating,
                    shortDescription: shortDescription,
                    runtime: Number(runtime),
                    additionalInfo: additionalInfo,
                    interestingFacts: interestingFacts,
                    genres: genres,
                    posterUrl: posterUrl,
                    persons: persons,
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
        if (!movieTitle || !releaseYear || !mainLanguage || !productionCountry || !productionCountry || !ageRating || !runtime || !editingMovieId) {
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
                    mainLanguage: mainLanguage,
                    productionCountry: productionCountry,
                    ageRating: ageRating,
                    shortDescription: shortDescription,
                    runtime: Number(runtime),
                    additionalInfo: additionalInfo,
                    interestingFacts: interestingFacts,
                    genres: genres,
                    posterUrl: posterUrl,
                    persons: persons
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

    function selectGenre(selectedGenre: IGenre) {
        setGenres((prevCheckedGenres) =>
            prevCheckedGenres.includes(selectedGenre)
                ? prevCheckedGenres.filter((genre) => genre !== selectedGenre)
                : [...prevCheckedGenres, selectedGenre]
        );
    }

    function checkGenres(id: number) {
        return genres.some((genre) => {
            return genre.id == id
        })
    }

    function selectPerson(selectedPerson: IPerson) {
        setPersons((prevCheckedPersons) =>
            prevCheckedPersons.includes(selectedPerson)
                ? prevCheckedPersons.filter((person) => person !== selectedPerson)
                : [...prevCheckedPersons, selectedPerson]
        );
    }

    function checkPersons(id: number) {
        return persons.some((person) => {
            return person.id == id
        })
    }

    function searchPerson(text: string) {
        setFilteredPerson(allPersons.filter((person) =>
            person.name.toLowerCase().includes(text.toLowerCase())
        ));
    }

    const handleEditClick = (movie: any) => {
        setMovieTitle(movie.title || "");
        setReleaseYear(movie.releaseYear || "");
        setMainLanguage(movie.mainLanguage || "");
        setProductionCountry(movie.productionCountry || "");
        setAgeRating(movie.ageRating || "")
        setRuntime(movie.runtime || "")
        setShortDescription(movie.shortDescription || "")
        setAdditionalInfo(movie.additionalInfo || "")
        setInterestingFacts(movie.interestingFacts || "")
        setGenres(movie.genres || "")
        setPosterUrl(movie.posterUrl || "");
        setEditingMovieId(movie.id);
        setIsModalOpen(true);
        setPersons([])
    };

    const resetForm = () => {
        setMovieTitle("");
        setReleaseYear("");
        setMainLanguage("");
        setProductionCountry("");
        setAgeRating("")
        setShortDescription("")
        setAdditionalInfo("")
        setInterestingFacts("")
        setPosterUrl("")
        setRuntime("")
        setEditingMovieId(null);
        setGenres([])
        setPersons([])
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
                            placeholder="Основна мова"
                            value={mainLanguage}
                            onChange={(e) => setMainLanguage(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Країна"
                            value={productionCountry}
                            onChange={(e) => setProductionCountry(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Віковий рейтинг"
                            value={ageRating}
                            onChange={(e) => setAgeRating(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Тривалість"
                            value={runtime}
                            onChange={(e) => setRuntime(e.target.value)}
                        />
                        <input
                            id="shortDescription"
                            type="text"
                            placeholder="Короткий опис (не обов'язково)"
                            value={shortDescription}
                            onChange={(e) => setShortDescription(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Додатково інформація (не обов'язково)"
                            value={additionalInfo}
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Інтересні факти (не обов'язково)"
                            value={interestingFacts}
                            onChange={(e) => setInterestingFacts(e.target.value)}
                        />
                        <div className="list">
                            { !genresIsLoading ? (!genresError ? allGenres.map((genre) => (
                                <div className="genre">
                                    <input type="checkbox" id={String(genre.id)} name={String(genre.id)} onChange={() => selectGenre(genre)} checked={checkGenres(genre.id)}/>
                                    <label htmlFor={String(genre.id)}>{genre.name}</label>
                                </div>
                            )) : (
                                <div>{genresError}</div>
                            )) : <div>loading</div>
                            }
                        </div>
                        <div className="list">
                            <input type="text" id="searchPerson" onChange={(e) => searchPerson(e.target.value)}/>
                            { !personsIsLoading ? (!personsError ? allPersons.map((person) => (
                                <div className="person">
                                    <input type="checkbox" id={String(person.id)} name={String(person.id)} onChange={() => selectPerson(person)} checked={checkPersons(person.id)}/>
                                    <label htmlFor={String(person.id)}>{person.name}{person.surname}</label>
                                </div>
                            )) : (
                                <div>{personsError}</div>
                            )) : <div>loading</div>
                            }
                        </div>
                        <input
                            type="url"
                            placeholder="URL Постера"
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

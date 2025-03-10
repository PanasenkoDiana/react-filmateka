import { useGenres } from "../../../../hooks/useGenres";


export function Genres(){
    const {genres, isLoading, error} = useGenres()

    


    return(
        <div className="genresDiv">
            <div className="createGenre">
                <button>Додати новий жанр</button>
            </div>

            { isLoading === false ? !error ? (
                <div className="allGenres">
                    {genres.map((genre)=>{
                        return(
                            <div className="genreCard">
                                <div className="GenreInfo">
                                    <p>{genre.name}</p>
                                </div>
                                <div className="genreCardButtons">
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
import { useMovies } from "../../../../hooks/useMovies";


export function Movies(){

    const {movies, isLoading, error} = useMovies()

    return(
        <div className="moviesDiv">
            <div className="createMovie">
                <button>Додати новий фільм</button>
            </div>

            { isLoading === false ? !error ? ( 
                <div className="allMovies">
                {movies.map((movie)=>{
                    return(
                        <div className="moviesCard">
                            <div className="movieInfo">
                                <img src='' alt="film image" />
                                <p className="movieTitle">{movie.title}</p>
                                <div className="additionalMovieInfo">
                                    {movie.genres.map((genre)=>{
                                        return(
                                            <p>{genre.name}</p>
                                        )
                                    })}
                                    <p>{movie.releaseYear}</p>
                                </div>
                            </div>
                            <div className="movieCardButtons">
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
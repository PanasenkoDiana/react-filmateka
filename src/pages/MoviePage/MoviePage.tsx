import { useParams } from "react-router-dom";
import { useMovieById } from "../../hooks/useMovieById";
import "./MoviePage.css";
import { Actors } from "./MoviePageComponents/Actors/Actors";
import { Description } from "./MoviePageComponents/Description/Description";



export function MoviePage(){
    const params = useParams();

    const { movie } = useMovieById(Number(params.id))



    return(
        <div className='MoviePage'>
            <div className="MainMovie">
                <img src={movie?.poster} alt="123" />
                <div className="MainMovieInfo">
                    <div className="JenreAndTime">
                        <p className="Jenre MainText ">{movie?.genre}</p>
                        <p className="MainText">|</p>
                        <p className="Time MainText">{movie?.runtime}хв.</p>
                    </div>
                    <p className="MovieName">{movie?.title}</p>
                    <button className="SeeFilm">
                        Дивитися
                    </button>
                </div>
            </div>

            <div className="SecondMovie">
                <div className="SecondNavigation">
                    <button className="SecondNavigationText">
                        Опис
                    </button>
                    <button className="SecondNavigationText">
                        Актери
                    </button>
                    <button className="SecondNavigationText">
                        Кадри з фільму
                    </button>
                    <button className="SecondNavigationText">
                        Відгуки
                    </button>
                </div>
                <div className="SecondContent">
                    {/* <Description></Description> */}
                </div>
            </div>
        </div>
    )
}
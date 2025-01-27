import { useParams } from "react-router-dom";
import { useMovieById } from "../../hooks/useMovieById";
import "./MoviePage.css";
import { Actors } from "./MoviePageComponents/Actors/Actors";
import { Description } from "./MoviePageComponents/Description/Description";
import { PhotosInFilm } from "./MoviePageComponents/PhotosInFilm/PhotosInFilm";
import { Reviews } from "./MoviePageComponents/Reviews/Reviews";



export function MoviePage(){
    const params = useParams();

    const { movie } = useMovieById(Number(params.id))



    return(
        <div className='MoviePage'>
            <div className="MainMovie">
                <div className="Container">
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
            </div>

            <div className="SecondMovie">
                <div className="Container2">
                    <div className="SecondNavigation">
                        <button className="NavigationButton">
                            Опис
                        </button>
                        <button className="NavigationButton">
                            Актери
                        </button>
                        <button className="NavigationButton">
                            Кадри з фільму
                        </button>
                        <button className="NavigationButton">
                            Відгуки
                        </button>
                    </div>
                    {/* <Description></Description> */}
                    {/* <Actors></Actors> */}
                    {/* <PhotosInFilm></PhotosInFilm> */}
                    <Reviews></Reviews>
                </div>
            </div>
            
        </div>
    )
}
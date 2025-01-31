import { useParams } from "react-router-dom";
import { useMovieById } from "../../hooks/useMovieById";
import "./MoviePage.css";
import { Actors } from "./MoviePageComponents/Actors/Actors";
import { Description } from "./MoviePageComponents/Description/Description";
import { PhotosInFilm } from "./MoviePageComponents/PhotosInFilm/PhotosInFilm";
import { Reviews } from "./MoviePageComponents/Reviews/Reviews";
import { useState } from "react";



export function MoviePage(){
    const params = useParams();

    const { movie } = useMovieById(Number(params.id))

    const [selectSecondModal, setSelectSecondModal] = useState('Description')

    function SelectModal(select: string){
        setSelectSecondModal(select)
    }

    return(
        <div className='MoviePage'>
            <div className="MainMovie">
                <div className="Container">
                    <img src={movie?.poster}alt="123" />
                    <div className="MainMovieInfo">
                        <div className="JenreAndTime">
                            <p className="Jenre MainText ">{movie?.genre} </p>
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
                        <button onClick={()=>{SelectModal('Description')}} className={`NavigationButton ${selectSecondModal === "Description" ? "Selected" : ''}`}>
                            Опис
                        </button>
                        <button onClick={()=>{SelectModal("Actors")}} className={`NavigationButton ${selectSecondModal === "Actors" ? "Selected" : ''}`}>
                            Актери
                        </button>
                        <button onClick={()=>{SelectModal("PhotosInFilm")}} className={`NavigationButton ${selectSecondModal === "PhotosInFilm" ? "Selected" : ''}`}>
                            Кадри з фільму
                        </button>
                        <button onClick={()=>{SelectModal('Reviews')}} className={`NavigationButton ${selectSecondModal === "Reviews" ? "Selected" : ''}`}>
                            Відгуки
                        </button>
                    </div>
                    {selectSecondModal === 'Description' && <Description></Description>}
                    {selectSecondModal === 'Actors' && <Actors></Actors>}
                    {selectSecondModal === 'PhotosInFilm' && <PhotosInFilm></PhotosInFilm>}
                    {selectSecondModal === 'Reviews' && <Reviews></Reviews>}
                </div>
            </div>
            
        </div>
    )
}
import { useParams } from "react-router-dom";
import { useMovieById } from "../../../../hooks/useMovieById";
import { IMovie } from "../../../../interfaces";
import './Actors.css'

export function Actors(){
    const params = useParams();

    const { movie } = useMovieById(Number(params.id))
    return(
        <div className="ActorsContainer">
            {movie?.actors.map(act => {
                return(
                    <div className="ActorCard">
                        <img className="ActorImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2hCicu99X_hHZ--YVorAUV5-f5iecac3Kw&s" alt="" />
                        <div className="ActorTextDiv">
                            <p className="ActorName">{act}</p>
                            <p className="ActorNameInEn">{act}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
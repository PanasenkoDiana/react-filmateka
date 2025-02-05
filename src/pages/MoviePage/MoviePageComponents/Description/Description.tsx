import { IMovie } from "../../../../interfaces";
import './Description.css'
import { useMovieById } from "../../../../hooks/useMovieById";
import { useParams } from "react-router-dom";



export function Description(){
    const params = useParams();

    const { movie } = useMovieById(Number(params.id))

    return(
        <>
        <div className="Description">
            <div className="Description1Part">
                <div className="Circle"></div>
                <p>{movie?.title}</p>
            </div>
            <div className="Description2Part">
                <div className="Circle"></div>
                <p className="Jenre MainText ">
                    {movie?.genres.map((genre) => genre.name).join(', ')}
                </p>

            </div>
            <div className="Description2Part">
                <div className="Circle"></div>
                <p>{movie?.runtime}</p>
            </div>
            <p className="Description3Part">
            <p>{movie?.shortDescription}</p>
            </p>
        </div>
        </>
    )
}
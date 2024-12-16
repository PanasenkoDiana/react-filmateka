import { Link } from "react-router-dom"

import { IMovie } from "../../interfaces"

import "./MovieCard.css"

export function MovieCard(props: IMovie) {
    let genres = props.genre[0]

    // Если количес10px;анров больше чем 1, то цикл for добавляет запятые в жанры
    for (let i = 1; props.genre.length > i; i++) {
        genres += ", " + props.genre[i]
    }

    return (
        <div className="movieCard">
            <Link to={`/movie/${props.id}`}>
                <img className="movieCardPoster" src={props.poster} alt="" />
                <div className="movieCardInfo">
                    <h3 className="movieCardTitle">{props.title}</h3>
                    <div className="movieCardDetails">
                        <p>Жанр: {genres}</p>
                        <p>Рік: {props.year}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

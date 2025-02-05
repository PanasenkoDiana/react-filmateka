import { useEffect } from "react"
import { Link } from "react-router-dom"

import { IGenre, IMovie } from "../../interfaces"

import "./MovieCard.css"

export function MovieCard(props: IMovie) {
    const genres: IGenre[] = props.genres

    let genresLable = genres[0].name

    for (let i = 1; genres.length > i; i++) {
        genresLable += ", " + genres[i].name
    }

    return (
        <div className="movieCard">
            <Link to={`/movie/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
                <img className="movieCardPoster" src={props.poster} alt="" />
                <div className="movieCardInfo">
                    <h3 className="movieCardTitle">{props.title}</h3>
                    <div className="movieCardDetails">
                        <p>Жанр: {genresLable}</p>
                        <p>Рік: {props.releaseYear}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
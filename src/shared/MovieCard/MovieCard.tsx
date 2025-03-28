import { Link } from "react-router-dom"

import { IGenre, IMovie } from "../types/types"
import { useRecentlyViewed } from "../../context/RecentlyViewedContext";

import "./MovieCard.css"

export function MovieCard(props: IMovie) {
    const genres: IGenre[] = props.genres
    const { addToRecentlyViewed } = useRecentlyViewed();

    let genresLable = genres[0].name

    const handleClick = () => {
        addToRecentlyViewed(props);
    };

    for (let i = 1; genres.length > i; i++) {
        genresLable += ", " + genres[i].name
    }

    return (
        <div className="movieCard">
            <Link to={`/movie/${props.id}`} onClick={handleClick}>
                <img className="movieCardPoster" src={props.poster} alt={props.title} />
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
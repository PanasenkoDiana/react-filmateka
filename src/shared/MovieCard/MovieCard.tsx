import { Link } from "react-router-dom"
import { useRecentlyViewed } from "../../context/RecentlyViewedContext"
import { IMovie } from "../../interfaces"
import "./MovieCard.css"

export function MovieCard(props: IMovie) {
    const { addToRecentlyViewed } = useRecentlyViewed();
    let genres = props.genre[0]

    // Если количес10px;анров больше чем 1, то цикл for добавляет запятые в жанры
    for (let i = 1; props.genre.length > i; i++) {
        genres += ", " + props.genre[i]
    }

    const handleClick = () => {
        addToRecentlyViewed(props);
        window.scrollTo(0, 0);
    }

    return (
        <div className="movieCard">
            <Link to={`/movie/${props.id}`} onClick={handleClick}>
                <img className="movieCardPoster" src={props.poster} alt={props.title} />
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

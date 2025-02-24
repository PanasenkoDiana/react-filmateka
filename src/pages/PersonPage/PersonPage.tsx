import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePersonById } from "../../hooks/usePersonById";
import { useMovies } from "../../hooks/useMovies";

import { MovieCard } from "../../shared/MovieCard/MovieCard";

import { IMovie } from "../../shared/types/types";

import "./PersonPage.css"


export function PersonPage() {
    const params = useParams()
    const { movies } = useMovies()
    
    const [filteredMovies, setFilteredMovies] = useState< IMovie[] >([])

    const { person } = usePersonById(Number(params.id))

    useEffect(() => {
        setFilteredMovies(
            movies.filter((movie) => {
                return movie.persons.some((pers) => pers.id === person?.id)
            })
        )
    }, [movies])


    if (!person) {
        return <div></div>
    }

    let personRoles = String(person.roles[0].name)

    for (let i = 1; i < person.roles.length; i++) {
        personRoles += ", " + String(person.roles[i].name);
    }

    return (
        <div className="personPage">
            <div className="person">
                <img id="personPhoto" src={person.photo || undefined} alt={person.name}/>
                <div className="personInfo">
                    <h2>{person.name} {person.surname}</h2>
                    <h3>{personRoles}</h3>
                    <div className="personDesctiptionDiv">
                        <h3>Опис:</h3>
                        <p>{person.description}</p>
                    </div>
                </div>
            </div>
            <div className="personMovies">
                <h2>Фільми:</h2>
                <div className="moviesList">
                    {filteredMovies.map((movie: IMovie) =>{
                        return (
                            <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            rating={movie.rating}
                            releaseYear={movie.releaseYear}
                            mainLanguage={movie.mainLanguage}
                            productionCountry={movie.productionCountry}
                            ageRating={movie.ageRating}
                            runtime={movie.runtime}
                            poster={movie.poster}
                            shortDescription={movie.shortDescription}
                            additionalInfo={movie.additionalInfo}
                            interestingFacts={movie.interestingFacts}
                            comments={movie.comments}
                            movieStills={movie.movieStills}
                            persons={movie.persons}
                            genres={movie.genres}
                            recentlyViewedMovie={movie.recentlyViewedMovie}
                            favorite={movie.favorite}
                          />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
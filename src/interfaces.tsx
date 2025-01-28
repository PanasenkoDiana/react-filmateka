export interface IActor {
    id: number;
    name: string; // Ім'я
    surname?: string; // Призвище
    photo?: string; // Фото
    films: IFilm[]; // Зв'язок many to many з фільмом
}

export interface IFilm {
    id: number;
    title: string;
    rating?: number;
    releaseYear: number;
    mainLanguage: string;
    productionCountry: string;
    ageRating: string;
    runtime: number;
    poster: string;
    shortDescription: string;
    additionalInfo?: string;
    interestingFacts?: string;
    userReviews: IUserReview[];
    genres: IGenre[];
    movieStills: IImage[];
    actors: IActor[];
}

export interface IGenre {
    id: number;
    name: string;
    descriptions?: string;
    film: IFilm[];
}

export interface IImage {
    id: number;
    url: string;
    filmId: number;
    Film: IFilm;
}

export interface IUserReview {
    id: number;
    filmId: number;
    userId: number;
    review: string;
    rating: number;
    Film: IFilm;
    User: IUser;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    UserReview: IUserReview[];
}
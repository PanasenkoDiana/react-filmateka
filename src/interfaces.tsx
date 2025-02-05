export interface IActor {
    id: number;
    name: string; // Ім'я
    surname?: string; // Призвище
    photo?: string; // Фото
    movies: IMovie[]; // Зв'язок many to many з фільмом
}

export interface IMovie {
    id: number;
    title: string;
    rating?: number;
    releaseYear: number;
    mainLanguage: string;
    productionCountry: string;
    ageRating: string;
    runtime: number;
    poster?: string;
    shortDescription?: string;
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
    movie: IMovie[];
}

export interface IImage {
    id: number;
    url: string;
    movieId: number;
    Film: IMovie;
}

export interface IUserReview {
    id: number;
    movieId: number;
    userId: number;
    review: string;
    rating: number;
    Film: IMovie;
    User: IUser;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    UserReview: IUserReview[];
}
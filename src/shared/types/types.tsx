export interface IGenre {
    id: number;
    name: string;
    descriptions?: string;
    movies: IMovie[];
}

export interface IImage {
    id: number;
    url: string;
    movieId: number;
    movie: IMovie;
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
    movieStills: IImage[];
    persons: IPerson[];
    genres: IGenre[];
    recentlyViewedMovie: IRecentlyViewedMovie[];
}

export interface IPerson {
    id: number;
    name: string;
    surname?: string;
    roles: IRole[];
    photo?: string;
    description?: string;
    movies: IMovie[];
}

export interface IRole {
    id: number;
    role: Role;
    persons: IPerson[];
}

export enum Role {
    ACTOR = 'ACTOR',
    DIRECTOR = 'DIRECTOR'
}

export interface IRecentlyViewedMovie {
    id: number;
    userId: number;
    movieId: number;
    viewedAt: string;
    user: IUser;
    movie: IMovie;
}

export interface IUserReview {
    id: number;
    movieId: number;
    userId: number;
    review: string;
    rating: number;
    movie: IMovie;
    user: IUser;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    userReviews: IUserReview[];
    recentlyViewedMovies: IRecentlyViewedMovie[];
}

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

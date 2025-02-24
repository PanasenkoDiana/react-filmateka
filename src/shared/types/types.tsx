export interface IGenre {
    id: number;
    name: string;
    descriptions: string | null;
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
    rating: number | null;
    releaseYear: number;
    mainLanguage: string;
    productionCountry: string;
    ageRating: string;
    runtime: number;
    poster: string | null;
    shortDescription: string | null;
    additionalInfo: string | null;
    interestingFacts: string | null;
    
    comments: IComment[];
    movieStills: IImage[];
    persons: IPerson[];
    genres: IGenre[];
    recentlyViewedMovie: IRecentlyViewedMovie[];
    favorite: IUser[]
}

export interface IPerson {
    id: number;
    name: string;
    surname: string | null;
    photo: string | null;
    description?: string | null;

    roles: IPersonRole[];
    movies: IMovie[];
}

export interface IPersonRole {
    id: number;
    name: String;
    persons: IPerson[];
}

export interface IRecentlyViewedMovie {
    id: number;
    userId: number;
    movieId: number;
    viewedAt: string;
    user: IUser;
    movie: IMovie;
}

export interface IComment {
    id: number;
    text: string;
    rating: number;

    movieId: number;
    movie: IMovie;
    
    userId: number;
    user: IUser;
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    profileImage: string | null;
    age: string | null;
    role: UserRole;

    comments: IComment[];
    recentlyViewedMovies: IRecentlyViewedMovie[];
    favoriteMovies: IMovie[];
}

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

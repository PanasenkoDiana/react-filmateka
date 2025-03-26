export interface IMovie {
    id: number;
    title: string;
    releaseYear: number;
    mainLanguage: string;
    productionCountry: string;
    ageRating: string;
    shortDescription: string;
    userReviews: any[];
    genres: string[];
    movieStills: string[];
    runtime: number;
    persons: any[];
    poster: string;
    recentlyViewedMovie?: boolean;
}

export interface IUser {
    id: number;
    email: string;
    username: string;
    password?: string;
    profileImage?: string;
    age: string;
    role: 'USER' | 'ADMIN';
    userReviews?: any[];
    recentlyViewedMovies?: any[];
}

export interface IUserFormData extends Omit<IUser, 'id' | 'userReviews' | 'recentlyViewedMovies'> {
    password: string;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IPerson {
    id: number;
    name: string;
    birthDate: string;
    deathDate?: string;
    birthPlace: string;
    biography: string;
    photo: string;
    roles: string[];
    movies: any[];
}

export interface IRole {
    id: number;
    name: string;
}

export interface IMovie {
    id: number;
    title: string;
    rating?: number;
    genres: string[];
    runtime: number;
}
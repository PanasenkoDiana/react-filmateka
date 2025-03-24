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
    id: string;
    email: string;
    username: string;
    password?: string;
    profileImage?: string;
    age: number;
    role: 'USER' | 'ADMIN';
    userReviews: any[];
    name: string;
    recentlyViewedMovies: any[];
}

export interface IUserFormData extends Omit<IUser, 'id' | 'userReviews' | 'recentlyViewedMovies'> {
    password: string;
}
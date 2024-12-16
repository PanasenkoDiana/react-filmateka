export interface IMovie{
    id: number;
    title: string; // Название
    year: number; // Год выпуска
    genre: string | string[]; // Жанры
    runtime: number; // Длительность в минутах
    director: string; // Режиссер
    actors: string[]; // Актёры
    poster: string; // Постер
    country: string; // Страна
    plot?: string; // Описание (опционально)
}
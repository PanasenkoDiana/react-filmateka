export interface IMovie {
    readonly id: number;
    readonly title: string;
    readonly poster: string;
    readonly year: number;
    readonly genre: readonly string[];
}

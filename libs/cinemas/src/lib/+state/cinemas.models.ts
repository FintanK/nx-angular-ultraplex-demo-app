/**
 * Interface for the 'Cinemas' data
 */
export interface CinemasEntity {
  id: string | number; // Primary ID
  name: string;
  screens: ScreenEntity[];
}

export interface ScreenEntity {
  id: string | number; // Primary ID
  name: string;
}

export interface ScreeningsEntity {
  id: string | number; // Primary ID
  cinemaName: string;
  movie: Movie;
  start: Date;
}

export interface Movie {
  id: string | number; // Primary ID
  name: string;
  runtime: number;
}

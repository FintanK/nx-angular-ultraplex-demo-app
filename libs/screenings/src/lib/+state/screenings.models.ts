/**
 * Interface for the 'Screenings' data
 */
export interface ScreeningsEntity {
  id: string | number; // Primary ID
  cinemaName: string;
  screenName: string;
  start: Date;
  movie: Movie;
}

export interface Movie {
  id: string | number;
  name: string;
  runtime: number;
}

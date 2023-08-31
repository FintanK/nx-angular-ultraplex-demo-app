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

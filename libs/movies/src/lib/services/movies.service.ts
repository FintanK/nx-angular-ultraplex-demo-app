import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(public http: HttpClient) {}

  getMovies() {
    return this.http.get(
      'https://develop.hybrid.iov99.com/ultraplex/api/v1/movies'
    );
  }
}

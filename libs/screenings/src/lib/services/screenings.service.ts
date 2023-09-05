import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreeningsService {
  constructor(public http: HttpClient) {}

  public getScreenings(cinemaId: string) {
    return this.http.get(
      'https://develop.hybrid.iov99.com/ultraplex/api/v1/cinemas/' +
        cinemaId +
        '/screenings?size=1000'
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CinemasService {
  constructor(public http: HttpClient) {}

  getCinemas() {
    return this.http.get(
      'https://develop.hybrid.iov99.com/ultraplex/api/v1/cinemas?size=1000'
    );
  }

  addNewCinema(name: string) {
    return this.http.put(
      'https://develop.hybrid.iov99.com/ultraplex/api/v1/cinemas',
      {
        name,
      }
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private apiKey = '490b04c8f538410e73954c6a4573f116';

  private apiUrl = 'https://api.themoviedb.org/3/';



  constructor(
    private _https: HttpClient
  ) { }

  getTrending() {
    return this._https.get(this.apiUrl + 'trending/all/ng', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTBiMDRjOGY1Mzg0MTBlNzM5NTRjNmE0NTczZjExNiIsInN1YiI6IjY1MzU3Zjc0OGNmY2M3MDE0YzhlMGE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PkVhgJpi3z_zlBOmr-lDowVYzbZB1iS0TJtFfuarGGY'
      }
    })
  }

  getMovies() {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this._https.get(url);
  }
  
  getSeries() {
    const url = `${this.apiUrl}/tv/popular?api_key=${this.apiKey}`;
    return this._https.get(url);
  }
  
}

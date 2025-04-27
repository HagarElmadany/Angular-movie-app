import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { All } from './../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private headers = new HttpHeaders({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODEyMTg0MWU2OGMyYzk0ZWUzMThkNzEzNzIwMDc5NSIsIm5iZiI6MTc0NTcxMTc3MC45NjMsInN1YiI6IjY4MGQ3MjlhNzFkZWRjYjhhY2VhYzRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.11JPfnJ-PkpvBdkNpAexLQBVZE19wlJ2hJjLOELdmt8`
  });

  // injecting HttpClient to make HTTP requests
  constructor(private _httpClient:HttpClient ) { }


  //method to get All
  getAllTrending(): Observable<All> {
    return this._httpClient.get<All>('https://api.themoviedb.org/3/trending/all/day?language=en-US', { headers: this.headers })
  }

  // method to get movies from the API
  getMovies(): Observable<All> {
    return this._httpClient.get<All>('https://api.themoviedb.org/3/trending/movie/day?language=en-US', { headers: this.headers })
}

// method to get tv
  getTv(): Observable<All> {
    return this._httpClient.get<All>('https://api.themoviedb.org/3/trending/tv/day?language=en-US', { headers: this.headers })

}

// method to get people
  getPeople(): Observable<All>{
    return this._httpClient.get<All>('https://api.themoviedb.org/3/trending/person/day?language=en-US', { headers: this.headers })
  }


  
  // method to get movie or tv details by id
  getDetails(id: string, mediaType: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`;
    return this._httpClient.get<any>(url, { headers: this.headers });
  }
}
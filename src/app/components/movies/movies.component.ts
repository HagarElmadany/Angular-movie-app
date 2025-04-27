import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TrendingService } from '../../services/movie.service';
import { Result } from '../../interfaces/movie';
import { error } from 'console'; 
import { response } from 'express'; 
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit { // Implementing OnInit lifecycle hook
  movies!: Result[]; // Declare movies as an array of any type

  constructor(private _trendingService: TrendingService , private router: Router) { } // Inject the TrendingService

  ngOnInit(): void {
      this._trendingService.getMovies().subscribe(
        (response: any) => {
          this.movies = response.results;     // Assign the results to the movies property
          console.log(this.movies); 
        },
        (error: any) => {
          console.error('Error fetching trending data:', error);  
        },
        () => {
          console.log('Request completed'); 
        })
  }


  // Method to navigate to movie details page
  goToDetail(id: number, mediaType: string) {
    this.router.navigate([`/movie-tv-details/${id}/${mediaType}`]);
  }

}

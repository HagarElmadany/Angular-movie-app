import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TrendingService } from '../../services/movie.service';
import { Result } from '../../interfaces/movie';
import { error } from 'console';  
import { response } from 'express'; 
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives and pipes
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-all',
  imports: [HttpClientModule ,CommonModule],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit { // Implementing OnInit lifecycle hook
  allTrending!: Result[]   // Declare allTrending as an array of any type

  constructor(private _trendingService: TrendingService , private router: Router) { } // Inject the TrendingService

  ngOnInit():void{
    this._trendingService.getAllTrending().subscribe( 
      (response) => {
      this.allTrending = response.results; 
      console.log(this.allTrending); 
    },
    (error) => {
      console.error('Error fetching trending data:', error); 
    },
    () => {
      console.log('Request completed');
    }
      
    )
  }

  // Method to navigate to movie or tv details page
  goToDetail(id: number, mediaType: string) {
    this.router.navigate([`/movie-tv-details/${id}/${mediaType}`]);
  }

}

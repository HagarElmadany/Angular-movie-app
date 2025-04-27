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
  selector: 'app-tv',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit { // Implementing OnInit lifecycle hook

  Tvs!: Result[]; 

  constructor(private _trendingService: TrendingService , private router: Router) { } // Inject the TrendingService

  ngOnInit(): void {
      this._trendingService.getTv().subscribe(
        (response: any) => {
          this.Tvs = response.results;    
          console.log(this.Tvs); 
        },
        (error: any) => {
          console.error('Error fetching trending data:', error);  
        },
        () => {
          console.log('Request completed'); 
        })
  }

  // Method to navigate to tv details page
   goToDetail(id: number, mediaType: string) {
    this.router.navigate([`/movie-tv-details/${id}/${mediaType}`]);
  }

}

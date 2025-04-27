import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TrendingService } from '../../services/movie.service';
import { Result } from '../../interfaces/movie';
import { error } from 'console'; 
import { response } from 'express';

@Component({
  selector: 'app-people',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit { // Implementing OnInit lifecycle hook
  people!: Result[]; 

  constructor(private _trendingService: TrendingService) { } // Inject the TrendingService

  ngOnInit(): void {
      this._trendingService.getPeople().subscribe(
        (response: any) => {
          this.people = response.results;    
          console.log(this.people); 
        },
        (error: any) => {
          console.error('Error fetching trending data:', error);  
        },
        () => {
          console.log('Request completed'); 
        })
  }


}

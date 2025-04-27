import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests

@Component({
  selector: 'app-movie-tv-details',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './movie-tv-details.component.html',
  styleUrl: './movie-tv-details.component.css'
})
export class MovieTvDetailsComponent implements OnInit { 
  id!: string;
  mediaType!: string;
  mediaDetails: any;

  constructor(private route: ActivatedRoute,private _trendingService:TrendingService) { } 

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.mediaType = this.route.snapshot.paramMap.get('mediaType')!;

    this._trendingService.getDetails(this.id, this.mediaType).subscribe(
      (data) => {
      console.log(data)
      this.mediaDetails = data;
    });
}

}
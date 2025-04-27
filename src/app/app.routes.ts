import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { TvComponent } from './components/tv/tv.component';
import { PeopleComponent } from './components/people/people.component';
import { AllComponent } from './components/all/all.component';
import { MovieTvDetailsComponent } from './components/movie-tv-details/movie-tv-details.component';



export const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },  // Redirect to home if no path is provided
    { path: 'all', component: AllComponent },
    { path: 'movies', component:MoviesComponent },
    { path: 'tv', component: TvComponent }, 
    { path: 'people', component: PeopleComponent },
    { path: 'movie-tv-details/:id/:mediaType', component: MovieTvDetailsComponent } 
    
];

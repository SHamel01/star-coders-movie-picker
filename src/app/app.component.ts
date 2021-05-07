import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  movieTitle: string;
  moviePlot: string;

  movieGenre: string[];
  criticRating: string;
  mpaaRating: string;

  constructor(private apiService: ApiService) {
    this.movieTitle = '';
    this.moviePlot = '';
  }

  // this function is called when the "Search Movies" button is clicked
  submitSearch() {
    console.log('Form Submitted --> ' + this.movieTitle);

    this.apiService
      .retrieveMovieData(this.movieTitle)
      .subscribe((apiResponse: any) => {
        console.log(apiResponse);

        this.mpaaRating = apiResponse['Rated'];
        this.movieGenre = apiResponse['Genre'];
        this.criticRating = this.apiService.parseCriticScores(
          apiResponse['Ratings']
        );
      });
  }
}

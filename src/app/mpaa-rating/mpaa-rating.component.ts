import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-mpaa-rating',
  templateUrl: './mpaa-rating.component.html',
  styleUrls: ['./mpaa-rating.component.css']
})
export class MpaaRatingComponent implements OnInit, OnChanges {
  @Input() movieRating: string;

  private preferredRating: string = 'R';

  private isGoodRating: boolean = true;

  private POSSIBLE_RATINGS = ['G', 'PG', 'PG-13', 'R'];
  showMessage: boolean;
  year: string;

  constructor() {}

  ngOnInit() {
    this.showMessage = true;
    this.year = '2020-2021';
  }

  ngOnChanges() {
    this.checkRating();
  }

  checkRating() {
    const maxRatingIndex = this.POSSIBLE_RATINGS.indexOf(this.preferredRating);
    if (this.POSSIBLE_RATINGS.indexOf(this.movieRating) > maxRatingIndex) {
      this.isGoodRating = false;
    } else {
      this.isGoodRating = true;
    }

    console.log('Good MPAA Rating? : ' + this.isGoodRating);
  }
}

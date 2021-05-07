import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mpaa-rating',
  templateUrl: './mpaa-rating.component.html',
  styleUrls: ['./mpaa-rating.component.css']
})
export class MpaaRatingComponent implements OnInit {
  showMessage: boolean;
  year: string;

  constructor() {}

  ngOnInit() {
    this.showMessage = true;
    this.year = '2020-2021';
  }
}

import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit, OnChanges {
  @Input() movieGenres: string[];

  private preferredGenre: string;

  constructor() {}

  ngOnInit() { }

  ngOnChanges() {
    console.log(this.movieGenres);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  showMessage: boolean;

  constructor() {}

  ngOnInit() {
    this.showMessage = true;
  }
}

import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-critic-score',
  templateUrl: './critic-score.component.html',
  styleUrls: ['./critic-score.component.css']
})
export class CriticScoreComponent implements OnInit, OnChanges {
  @Input() criticScore: string;

  private preferredScore: number = 0.0;
  private isGoodScore: boolean = true;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.checkScores();
  }

  checkScores() {
    const currentScore = parseFloat(this.criticScore);
    if (currentScore >= this.preferredScore) {
      this.isGoodScore = true;
    } else {
      this.isGoodScore = false;
    }

    console.log('Good Critic Score? : ' + this.isGoodScore);
  }
}

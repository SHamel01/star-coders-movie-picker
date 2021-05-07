import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CriticScoreComponent } from './critic-score/critic-score.component';
import { GenreComponent } from './genre/genre.component';
import { MpaaRatingComponent } from './mpaa-rating/mpaa-rating.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    GenreComponent,
    MpaaRatingComponent,
    CriticScoreComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

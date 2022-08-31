import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { CardComponent } from './card/card.component';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayCardComponent,
    CardComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

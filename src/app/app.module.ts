import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import{ MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { AttemptViewComponent } from './attempt-view/attempt-view.component';
import { Routes, Router, RouterModule } from '@angular/router';

const appRoutes:Routes = [
  //{path:'recommend',component:RecommendationComponent},
  {path:'attempt-view/:id',component:AttemptViewComponent},
  {path:'**',component:RecommendationComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RecommendationComponent,
    AttemptViewComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
     MatListModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }

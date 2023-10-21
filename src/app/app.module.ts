import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './components/layout/layout.module';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './components/shared/cards/cards.component';
import { SharedModule } from './components/shared/shared.module';
import { HomeComponent } from './components/routes/home/home.component';
import { RoutesModule } from './components/routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    RouterModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class HeaderComponent{}

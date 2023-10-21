import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    MoviesComponent,
    SeriesComponent,
    IngresarComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class RoutesModule { }

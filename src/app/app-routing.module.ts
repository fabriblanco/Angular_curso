import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { MoviesComponent } from './components/routes/movies/movies.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'movies',
    component: MoviesComponent
  },{
    path:'series',
    component: SeriesComponent
  },{
    path:'Ingresar',
    component:IngresarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

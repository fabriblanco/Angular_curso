import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { MoviesComponent } from './components/routes/movies/movies.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // Importa el componente de error 404
import { LoginComponent } from './components/auth/login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
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
  },{
      path: 'login',
      component: LoginComponent
  },  // Ruta de error 404 (debe estar al final)
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any; // creo objeto para almacenar los datos del usuario

  ngOnInit() {
    // Recupero los datos del usuario almacenados en LocalStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.user = JSON.parse(userData);
    }}

  constructor(private moviesServices: MovieServiceService){
    
  }

   getTrendingAll(): void {
    this.moviesServices.getTrending().subscribe({
      next: (Response) => {
        console.log(Response);
      }
    })
  }

}

import { Component } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private moviesServices: MovieServiceService){
    
  }

   getTrendingAll (): void {
    this.moviesServices.getTrending().subscribe({
      next: (Response) => {
        console.log(Response);
      }
    })
  }

}

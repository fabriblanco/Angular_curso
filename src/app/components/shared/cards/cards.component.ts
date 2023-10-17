import { Component } from '@angular/core';

interface IdataCard{
  id:number,
  descripcion:string,
  rating:number,
  categoria:string,
  name: string,
  urlImg: string
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {




  arrayInfoCards: IdataCard[] = [
    {
      id:0,
      descripcion:'descrip',
      rating:12.8,
      categoria:'Pelicula',
      name: 'Buscando a Nemo',
      urlImg: '../../../../assets/eew.jpg'
    },
    {
      id:1,
      descripcion:'descrip2',
      rating:12.8,
      categoria:'Serie',
      name: '13 Reasons Why',
      urlImg: '../../../../assets/22222222.jpg'
    },
    {
      id:2,
      descripcion:'descrip3',
      rating:12.8,
      categoria:'Serie',
      name: 'The Walking Dead',
      urlImg: '../../../../assets/dea.jpg'
    },
    {
      id:3,
      descripcion:'descrip4',
      rating:14.8,
      categoria:'Serie',
      name: 'Sex Education ',
      urlImg: '../../../../assets/sexEdu.jpg'
    },
    {
      id:4,
      descripcion:'descrip5',
      rating:11.8,
      categoria:'Serie',
      name: 'Dark',
      urlImg: '../../../../assets/dark1.jpg'
    },
    {
      id:5,
      descripcion:'descrip6',
      rating:22.8,
      categoria:'Pelicula',
      name: 'Hombres de Negro 3',
      urlImg: '../../../../assets/resizer.jpg'
    },
    {
      id:6,
      descripcion:'descrip7',
      rating:19,
      categoria:'Pelicula',
      name: 'Harry Poter 6',
      urlImg: '../../../../assets/harry.jpg'
    },
    {
      id:7,
      descripcion:'descrip8',
      rating:8,
      categoria:'Pelicula',
      name: 'Annabelle 3',
      urlImg: '../../../../assets/anabe.jpg'
    }
    
  ]
}

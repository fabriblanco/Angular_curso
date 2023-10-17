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
      descripcion:'La película Buscando a Nemo narra las aventuras de este pez, que es capturado y llevado fuera del arrecife australiano para ser parte de la pecera de un dentista de Sidney. Su padre comienza una ardua búsqueda junto a otros animales marinos que le ayudan finalmente a rescatar a su hijo y a liberar al resto de peces.',
      rating:12.8,
      categoria:'Pelicula',
      name: 'Buscando a Nemo',
      urlImg: '../../../../assets/eew.jpg'
    },
    {
      id:1,
      descripcion:'El adolescente Clay Jensen se halla en medio de una serie de misterios desgarradores accionados por el trágico suicidio de una de sus amigas. Ve todo lo que quieras. Katherine Langford fue nominada al Globo de Oro por su papel en esta serie basada en la exitosa novela de Jay Asher.',
      rating:12.8,
      categoria:'Serie',
      name: '13 Reasons Why',
      urlImg: '../../../../assets/22222222.jpg'
    },
    {
      id:2,
      descripcion:'The Walking Dead está basada en un mundo post-apocalíptico repleto de zombis, llamados caminantes, en el que un grupo de supervivientes debe de luchar por su vida frente a la plaga de estos y los peligros de otros grupos de humanos hostiles.',
      rating:12.8,
      categoria:'Serie',
      name: 'The Walking Dead',
      urlImg: '../../../../assets/dea.jpg'
    },
    {
      id:3,
      descripcion:'Por tener una madre terapeuta, Otis siempre tiene respuestas cuando de sexo se trata. Así que su rebelde amiga Maeve le propone abrir una clínica de terapia sexual en la escuela. Ve todo lo que quieras.',
      rating:14.8,
      categoria:'Serie',
      name: 'Sex Education ',
      urlImg: '../../../../assets/sexEdu.jpg'
    },
    {
      id:4,
      descripcion:'La desaparición de un niño lleva a cuatro familias a una frenética búsqueda, mientras descubren un misterio que abarca tres generaciones. Ve todo lo que quieras. Esta inquietante serie de Baran bo Odar y Jantje Friese ganó el Grimme‑Preis en la categoría de ficción televisiva.',
      rating:11.8,
      categoria:'Serie',
      name: 'Dark',
      urlImg: '../../../../assets/dark1.jpg'
    },
    {
      id:5,
      descripcion:' Los agentes J (Will Smith) y K (Tommy Lee Jones) regresan... en el tiempo. J ha visto cosas inexplicables en sus 15 años con los Hombres de Negro, pero nada, ni siquiera los extraterrestres, lo desconcierta tanto como su compañero sardónico y reservado.',
      rating:22.8,
      categoria:'Pelicula',
      name: 'Hombres de Negro 3',
      urlImg: '../../../../assets/resizer.jpg'
    },
    {
      id:6,
      descripcion:'La sombra demoniaca de Voldemort se cierne cada vez más sobre el universo de los Muggle y el mundo de la magia. Hogwarts ha dejado de ser un remanso de paz, el peligro ronda en el corazón del castillo... Pero Dumbledore está más decidido que nunca a preparar a Harry para su combate final, ahora inminente.',
      rating:19,
      categoria:'Pelicula',
      name: 'Harry Poter 6',
      urlImg: '../../../../assets/harry.jpg'
    },
    {
      id:7,
      descripcion:'Annabelle vuelve a casa, Determinados a evitar que Annabelle cause más caos, los demonólogos Ed y Lorrain Warren encierran a la muñeca diabólica en la sala de artefactos de su casa, poniéndola a salvo tras un cristal sagrado y contando con la sagrada bendición de un cura.',
      rating:8,
      categoria:'Pelicula',
      name: 'Annabelle 3',
      urlImg: '../../../../assets/anabe.jpg'
    }
    
  ]
}

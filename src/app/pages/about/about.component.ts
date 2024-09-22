import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  ver = false;

  user = {
    name: 'José Manuel Ambrosio Agudo',
    description: 'Soy estudiante del TSU en Tecnologias de la informacion, me gustan los videjuegos y la programacion',
  }

  videojuegos: string[] = [
    'Halo',
    'Tomb Rider',
    'Forza Horizon',
    'DOOM',
    'Gears of War',
    'Fornite',
    'Call of Duty',
    'Battlefield',
    'Minecraft',
    'Hellblade',
    'A Plague Tale',
    'Left 4 Dead',
  ]

  ocultarInfo(){
    console.log('Ocultar info');
    this.ver = !this.ver;
  }

}

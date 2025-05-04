import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-heroe-page',
  imports: [],
  templateUrl: './heroe-page.component.html',
  styleUrl: './heroe-page.component.scss'
})
export class HeroePageComponent {

  name=signal('Ironman');
  age=signal(45);

  getHeroDescription(name:string,age:number):string{
    return `${ name } - ${ age }`;
  }

  changeHero(): void {
    this.name.update(() => 'Spiderman');
    this.age.update(() => 22);
  }

  resetForm():void{
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge():void{
    this.age.set(60);
  }



}



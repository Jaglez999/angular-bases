import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  // Los métodos get se ven como propiedades.
  get capitalizedName () : string {
    return this.name.toUpperCase();
  };

  public getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  };

  public changeHero() : void {
    this.name = 'Spiderman';
  };

  public changeAge() : void {
    this.age = 25;
  }

  public resetForm() : void {
    this.age=45;
    this.name='Ironman';
  }

}


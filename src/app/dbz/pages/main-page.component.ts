import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public charactersList: Character[] = [{
    name: "Krillin",
    power: 1000
  },
  {
    name: "Goku",
    power: 9500
  },
  {
    name: "Vegeta",
    power:7500
  }
];

  public onNewCharacterPage(character: Character): void {

    this.charactersList.push(character);

    console.log("MainPage");
    console.log(character);
  }

  public onRemoveCharacterPage (index: number): void {

    this.charactersList.splice(index, 1);

  }
}

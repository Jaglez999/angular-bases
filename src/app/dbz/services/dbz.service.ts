import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class DbzService {

    public charactersList: Character[] = [{
      name: "Krillin",
      power: 1000,
      id: uuid()
    },
    {
      name: "Goku",
      power: 9500,
      id: uuid()
    },
    {
      name: "Vegeta",
      power:7500,
      id: uuid()
    }
  ];

    public addCharacter(character: Character): void {

      // (...): Así se asignan todos los campos de character a this.character. Y el uudi adicionalmente.
      const newCharacter: Character = {...character, id:uuid()}

      this.charactersList.push(newCharacter);

      console.log("MainPage");
      console.log(newCharacter);
    }

    public removeCharacterPage (index: number): void {

      this.charactersList.splice(index, 1);

    }

    public deleteCharacterById(id: string) {

      console.log({id});
      this.charactersList = this.charactersList.filter(character => character.id != id);
    }

    constructor() {}

}

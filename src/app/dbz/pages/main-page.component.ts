import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor (private dbzService: DbzService) {};

  get characterListFromDbzSrv(): Character[] {
    return [...this.dbzService.charactersList];
  };

  onRemoveCharacterFromServ(id:string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacterFromSrv(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}



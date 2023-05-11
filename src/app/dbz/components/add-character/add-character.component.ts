import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    name: "ABC",
    power: 0
  };

  public emitCharacter(): void {

    // debugger; Funciona como un breakpoint

    console.log(this.newCharacter);
    if (this.newCharacter.name.length==0) return;

    this.onNewCharacter.emit(this.newCharacter);

    this.newCharacter = {name:'', power:0};
  }

}

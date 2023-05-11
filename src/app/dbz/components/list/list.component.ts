import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input()
  public characterList: Character[] = [ {
    name: "Trunk",
    power: 10
  }];

  @Output()
  public onRemove: EventEmitter<number> = new EventEmitter();

  public onRemoveCharacter(index: number): void {

    // EMitir el ID del caracter.
    this.onRemove.emit(index);

    console.log({index});

  }

}

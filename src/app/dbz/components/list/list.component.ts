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
  // public onRemove: EventEmitter<number> = new EventEmitter();
  public onRemove: EventEmitter<string> = new EventEmitter();

  // public onRemoveCharacter(index: number): void {
  public onRemoveCharacter(id?: string): void {

    if (!id) return;

  // Emitir el ID del caracter.
     this.onRemove.emit(id);

  // Emitir el índice del elemento.
  //   this.onRemove.emit(index);
  //   console.log({index});
  }

}

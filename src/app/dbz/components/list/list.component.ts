
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl:'./list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

@Input()
  public characterList : Character[]=[{
    name:'Trunks',
    power:10
  }];

  @Output()
  //public onDelete: EventEmitter<number>= new EventEmitter();
  public onDelete: EventEmitter<string>= new EventEmitter();

 // onDeleteCharacter (index:number):void{
  onDeleteCharacter (id?:string):void{
    //TODO:emitir el ID DEL PERSONAJE
    if(!id) return;
    this.onDelete.emit(id);


  }

}


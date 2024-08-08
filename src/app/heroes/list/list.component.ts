import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[]= ['Spiterman','Iroman','Thor','Hulk'];
  public deleteHero?: string;

   removeLastHero():void{
    this.deleteHero =this.heroNames.pop();

  }

}

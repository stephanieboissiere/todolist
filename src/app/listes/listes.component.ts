import { Component, OnInit } from '@angular/core';
import { List } from '../modeles/newList.modele';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.scss']
})
export class ListesComponent implements OnInit {
  
  lists! : Array<List>;

  constructor(private tacheService: TacheService) { }

  ngOnInit(): void {
    this.lists = this.tacheService.getAllList();
  }

  addList(nom: string){
    this.lists = this.tacheService.addList(nom); 
  }
}
